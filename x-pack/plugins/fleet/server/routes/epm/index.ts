/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { IKibanaResponse } from '@kbn/core/server';

import { parseExperimentalConfigValue } from '../../../common/experimental_features';

import { API_VERSIONS } from '../../../common/constants';

import type { FleetAuthz } from '../../../common';

import {
  calculateRouteAuthz,
  type FleetAuthzRouter,
  getRouteRequiredAuthz,
} from '../../services/security';
import type { FleetAuthzRouteConfig } from '../../services/security/types';

import type {
  DeletePackageResponse,
  GetInfoResponse,
  InstallPackageResponse,
  UpdatePackageResponse,
} from '../../../common/types';

import { EPM_API_ROUTES } from '../../constants';
import { splitPkgKey } from '../../services/epm/registry';
import {
  GetCategoriesRequestSchema,
  GetPackagesRequestSchema,
  GetInstalledPackagesRequestSchema,
  GetFileRequestSchema,
  GetInfoRequestSchema,
  GetInfoRequestSchemaDeprecated,
  GetBulkAssetsRequestSchema,
  InstallPackageFromRegistryRequestSchema,
  InstallPackageFromRegistryRequestSchemaDeprecated,
  InstallPackageByUploadRequestSchema,
  DeletePackageRequestSchema,
  DeletePackageRequestSchemaDeprecated,
  BulkInstallPackagesFromRegistryRequestSchema,
  GetStatsRequestSchema,
  UpdatePackageRequestSchema,
  UpdatePackageRequestSchemaDeprecated,
  ReauthorizeTransformRequestSchema,
  GetDataStreamsRequestSchema,
  CreateCustomIntegrationRequestSchema,
  GetInputsRequestSchema,
  InstallKibanaAssetsRequestSchema,
  DeleteKibanaAssetsRequestSchema,
} from '../../types';
import type { FleetConfigType } from '../../config';

import {
  getCategoriesHandler,
  getListHandler,
  getInstalledListHandler,
  getLimitedListHandler,
  getInfoHandler,
  getBulkAssetsHandler,
  installPackageFromRegistryHandler,
  installPackageByUploadHandler,
  deletePackageHandler,
  bulkInstallPackagesFromRegistryHandler,
  getStatsHandler,
  updatePackageHandler,
  getVerificationKeyIdHandler,
  reauthorizeTransformsHandler,
  getDataStreamsHandler,
  createCustomIntegrationHandler,
  getInputsHandler,
} from './handlers';
import { getFileHandler } from './file_handler';
import {
  deletePackageKibanaAssetsHandler,
  installPackageKibanaAssetsHandler,
} from './kibana_assets_handler';

const MAX_FILE_SIZE_BYTES = 104857600; // 100MB

export const INSTALL_PACKAGES_AUTHZ: FleetAuthzRouteConfig['fleetAuthz'] = {
  integrations: { installPackages: true },
};

export const READ_PACKAGE_INFO_AUTHZ: FleetAuthzRouteConfig['fleetAuthz'] = {
  integrations: { readPackageInfo: true },
};

export const registerRoutes = (router: FleetAuthzRouter, config: FleetConfigType) => {
  const experimentalFeatures = parseExperimentalConfigValue(config.enableExperimental);

  router.versioned
    .get({
      path: EPM_API_ROUTES.CATEGORIES_PATTERN,
      fleetAuthz: READ_PACKAGE_INFO_AUTHZ,
      summary: `Get package categories`,
      options: {
        tags: ['oas-tag:Elastic Package Manager (EPM)'],
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: GetCategoriesRequestSchema },
      },
      getCategoriesHandler
    );

  router.versioned
    .get({
      path: EPM_API_ROUTES.LIST_PATTERN,
      fleetAuthz: READ_PACKAGE_INFO_AUTHZ,
      summary: `Get packages`,
      options: {
        tags: ['oas-tag:Elastic Package Manager (EPM)'],
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: GetPackagesRequestSchema },
      },
      getListHandler
    );

  router.versioned
    .get({
      path: EPM_API_ROUTES.INSTALLED_LIST_PATTERN,
      fleetAuthz: READ_PACKAGE_INFO_AUTHZ,
      summary: `Get installed packages`,
      options: {
        tags: ['oas-tag:Elastic Package Manager (EPM)'],
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: GetInstalledPackagesRequestSchema },
      },
      getInstalledListHandler
    );

  router.versioned
    .get({
      path: EPM_API_ROUTES.LIMITED_LIST_PATTERN,
      fleetAuthz: READ_PACKAGE_INFO_AUTHZ,
      summary: `Get a limited package list`,
      options: {
        tags: ['oas-tag:Elastic Package Manager (EPM)'],
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: false,
      },
      getLimitedListHandler
    );

  router.versioned
    .get({
      path: EPM_API_ROUTES.STATS_PATTERN,
      fleetAuthz: READ_PACKAGE_INFO_AUTHZ,
      summary: `Get package stats`,
      options: {
        tags: ['oas-tag:Elastic Package Manager (EPM)'],
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: GetStatsRequestSchema },
      },
      getStatsHandler
    );

  router.versioned
    .get({
      path: EPM_API_ROUTES.INPUTS_PATTERN,
      fleetAuthz: READ_PACKAGE_INFO_AUTHZ,
      summary: `Get an inputs template`,
      options: {
        tags: ['oas-tag:Elastic Package Manager (EPM)'],
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: GetInputsRequestSchema },
      },
      getInputsHandler
    );

  router.versioned
    .get({
      path: EPM_API_ROUTES.FILEPATH_PATTERN,
      fleetAuthz: READ_PACKAGE_INFO_AUTHZ,
      summary: `Get a package file`,
      options: {
        tags: ['oas-tag:Elastic Package Manager (EPM)'],
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: GetFileRequestSchema },
      },
      getFileHandler
    );

  router.versioned
    .get({
      path: EPM_API_ROUTES.INFO_PATTERN,
      fleetAuthz: (fleetAuthz: FleetAuthz): boolean =>
        calculateRouteAuthz(fleetAuthz, getRouteRequiredAuthz('get', EPM_API_ROUTES.INFO_PATTERN))
          .granted,
      summary: `Get a package`,
      options: {
        tags: ['oas-tag:Elastic Package Manager (EPM)'],
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: GetInfoRequestSchema },
      },
      getInfoHandler
    );

  router.versioned
    .put({
      path: EPM_API_ROUTES.INFO_PATTERN,
      fleetAuthz: {
        integrations: { writePackageSettings: true },
      },
      summary: `Update package settings`,
      options: {
        tags: ['oas-tag:Elastic Package Manager (EPM)'],
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: UpdatePackageRequestSchema },
      },
      updatePackageHandler
    );

  router.versioned
    .post({
      path: EPM_API_ROUTES.INSTALL_FROM_REGISTRY_PATTERN,
      fleetAuthz: INSTALL_PACKAGES_AUTHZ,
      summary: `Install a package from the registry`,
      options: {
        tags: ['oas-tag:Elastic Package Manager (EPM)'],
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: InstallPackageFromRegistryRequestSchema },
      },
      installPackageFromRegistryHandler
    );

  if (experimentalFeatures.useSpaceAwareness) {
    router.versioned
      .post({
        path: EPM_API_ROUTES.INSTALL_KIBANA_ASSETS_PATTERN,
        fleetAuthz: {
          integrations: { installPackages: true },
        },
        summary: `Install Kibana assets for a package`,
        options: {
          tags: ['oas-tag:Elastic Package Manager (EPM)'],
        },
      })
      .addVersion(
        {
          version: API_VERSIONS.public.v1,
          validate: { request: InstallKibanaAssetsRequestSchema },
        },
        installPackageKibanaAssetsHandler
      );

    router.versioned
      .delete({
        path: EPM_API_ROUTES.DELETE_KIBANA_ASSETS_PATTERN,
        fleetAuthz: {
          integrations: { installPackages: true },
        },
        summary: `Delete Kibana assets for a package`,
        options: {
          tags: ['oas-tag:Elastic Package Manager (EPM)'],
        },
      })
      .addVersion(
        {
          version: API_VERSIONS.public.v1,
          validate: { request: DeleteKibanaAssetsRequestSchema },
        },
        deletePackageKibanaAssetsHandler
      );
  }

  router.versioned
    .post({
      path: EPM_API_ROUTES.BULK_INSTALL_PATTERN,
      fleetAuthz: {
        integrations: { installPackages: true, upgradePackages: true },
      },
      summary: `Bulk install packages`,
      options: {
        tags: ['oas-tag:Elastic Package Manager (EPM)'],
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: BulkInstallPackagesFromRegistryRequestSchema },
      },
      bulkInstallPackagesFromRegistryHandler
    );

  // Only allow upload for superuser
  router.versioned
    .post({
      path: EPM_API_ROUTES.INSTALL_BY_UPLOAD_PATTERN,
      options: {
        body: {
          accepts: ['application/gzip', 'application/zip'],
          parse: false,
          maxBytes: MAX_FILE_SIZE_BYTES,
        },
      },
      fleetAuthz: {
        integrations: { uploadPackages: true },
      },
      summary: `Install a package by upload`,
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: InstallPackageByUploadRequestSchema },
      },
      installPackageByUploadHandler
    );

  router.versioned
    .post({
      path: EPM_API_ROUTES.CUSTOM_INTEGRATIONS_PATTERN,
      fleetAuthz: INSTALL_PACKAGES_AUTHZ,
      summary: `Create a custom integration`,
      options: {
        tags: ['oas-tag:Elastic Package Manager (EPM)'],
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: CreateCustomIntegrationRequestSchema },
      },
      createCustomIntegrationHandler
    );

  router.versioned
    .delete({
      path: EPM_API_ROUTES.DELETE_PATTERN,
      fleetAuthz: {
        integrations: { removePackages: true },
      },
      summary: `Delete a package`,
      options: {
        tags: ['oas-tag:Elastic Package Manager (EPM)'],
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: DeletePackageRequestSchema },
      },

      deletePackageHandler
    );

  router.versioned
    .get({
      path: EPM_API_ROUTES.VERIFICATION_KEY_ID,
      fleetAuthz: READ_PACKAGE_INFO_AUTHZ,
      summary: `Get a package signature verification key ID`,
      options: {
        tags: ['oas-tag:Elastic Package Manager (EPM)'],
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: false,
      },
      getVerificationKeyIdHandler
    );

  router.versioned
    .get({
      path: EPM_API_ROUTES.DATA_STREAMS_PATTERN,
      fleetAuthz: READ_PACKAGE_INFO_AUTHZ,
      summary: `Get data streams`,
      options: {
        tags: ['oas-tag:Data streams'],
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: GetDataStreamsRequestSchema },
      },
      getDataStreamsHandler
    );

  router.versioned
    .post({
      path: EPM_API_ROUTES.BULK_ASSETS_PATTERN,
      fleetAuthz: READ_PACKAGE_INFO_AUTHZ,
      summary: `Get bulk assets`,
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: GetBulkAssetsRequestSchema },
      },
      getBulkAssetsHandler
    );

  // deprecated since 8.0
  // This endpoint should be marked as internal but the router selects this endpoint over the new GET one
  // For now keeping it public
  router.versioned
    .get({
      path: EPM_API_ROUTES.INFO_PATTERN_DEPRECATED,
      fleetAuthz: (fleetAuthz: FleetAuthz): boolean =>
        calculateRouteAuthz(
          fleetAuthz,
          getRouteRequiredAuthz('get', EPM_API_ROUTES.INFO_PATTERN_DEPRECATED)
        ).granted,
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: GetInfoRequestSchemaDeprecated },
      },
      async (context, request, response) => {
        const newRequest = { ...request, params: splitPkgKey(request.params.pkgkey) } as any;
        const resp: IKibanaResponse<GetInfoResponse> = await getInfoHandler(
          context,
          newRequest,
          response
        );
        if (resp.payload?.item) {
          // returning item as well here, because pkgVersion is optional in new GET endpoint, and if not specified, the router selects the deprecated route
          return response.ok({ body: { item: resp.payload.item, response: resp.payload.item } });
        }
        return resp;
      }
    );

  router.versioned
    .put({
      path: EPM_API_ROUTES.INFO_PATTERN_DEPRECATED,

      fleetAuthz: {
        integrations: { writePackageSettings: true },
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: UpdatePackageRequestSchemaDeprecated },
      },
      async (context, request, response) => {
        const newRequest = { ...request, params: splitPkgKey(request.params.pkgkey) } as any;
        const resp: IKibanaResponse<UpdatePackageResponse> = await updatePackageHandler(
          context,
          newRequest,
          response
        );
        if (resp.payload?.item) {
          return response.ok({ body: { response: resp.payload.item } });
        }
        return resp;
      }
    );

  // This endpoint should be marked as internal but the router selects this endpoint over the new POST
  router.versioned
    .post({
      path: EPM_API_ROUTES.INSTALL_FROM_REGISTRY_PATTERN_DEPRECATED,
      fleetAuthz: INSTALL_PACKAGES_AUTHZ,
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: InstallPackageFromRegistryRequestSchemaDeprecated },
      },
      async (context, request, response) => {
        const newRequest = {
          ...request,
          params: splitPkgKey(request.params.pkgkey),
          query: request.query,
        } as any;
        const resp: IKibanaResponse<InstallPackageResponse> =
          await installPackageFromRegistryHandler(context, newRequest, response);
        if (resp.payload?.items) {
          return response.ok({ body: { ...resp.payload, response: resp.payload.items } });
        }
        return resp;
      }
    );

  router.versioned
    .delete({
      path: EPM_API_ROUTES.DELETE_PATTERN_DEPRECATED,

      fleetAuthz: {
        integrations: { removePackages: true },
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: DeletePackageRequestSchemaDeprecated },
      },
      async (context, request, response) => {
        const newRequest = { ...request, params: splitPkgKey(request.params.pkgkey) } as any;
        const resp: IKibanaResponse<DeletePackageResponse> = await deletePackageHandler(
          context,
          newRequest,
          response
        );
        if (resp.payload?.items) {
          return response.ok({ body: { response: resp.payload.items } });
        }
        return resp;
      }
    );

  // Update transforms with es-secondary-authorization headers,
  // append authorized_by to transform's _meta, and start transforms
  router.versioned
    .post({
      path: EPM_API_ROUTES.REAUTHORIZE_TRANSFORMS,
      fleetAuthz: {
        ...INSTALL_PACKAGES_AUTHZ,
        packagePrivileges: {
          transform: {
            actions: {
              canStartStopTransform: {
                executePackageAction: true,
              },
            },
          },
        },
      },
      summary: `Authorize transforms`,
      options: {
        tags: ['oas-tag:Elastic Package Manager (EPM)'],
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: { request: ReauthorizeTransformRequestSchema },
      },
      reauthorizeTransformsHandler
    );
};
