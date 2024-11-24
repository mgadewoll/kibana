/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/*
 * NOTICE: Do not edit this file manually.
 * This file is automatically generated by the OpenAPI Generator, @kbn/openapi-generator.
 *
 * info:
 *   title: Elastic Security - Timeline - Favorite API
 *   version: 2023-10-31
 */

import { z } from '@kbn/zod';

import { TimelineType, FavoriteTimelineResponse } from '../model/components.gen';

export type PersistFavoriteRouteRequestBody = z.infer<typeof PersistFavoriteRouteRequestBody>;
export const PersistFavoriteRouteRequestBody = z.object({
  timelineId: z.string().nullable(),
  templateTimelineId: z.string().nullable(),
  templateTimelineVersion: z.number().nullable(),
  timelineType: TimelineType.nullable(),
});
export type PersistFavoriteRouteRequestBodyInput = z.input<typeof PersistFavoriteRouteRequestBody>;

export type PersistFavoriteRouteResponse = z.infer<typeof PersistFavoriteRouteResponse>;
export const PersistFavoriteRouteResponse = FavoriteTimelineResponse;
