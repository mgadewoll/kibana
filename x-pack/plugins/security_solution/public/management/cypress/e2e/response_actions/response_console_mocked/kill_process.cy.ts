/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { ActionDetails } from '../../../../../../common/endpoint/types';
import type { ReturnTypeFromChainable } from '../../../types';
import { indexEndpointHosts } from '../../../tasks/index_endpoint_hosts';
import {
  inputConsoleCommand,
  openResponseConsoleFromEndpointList,
  submitCommand,
  waitForEndpointListPageToBeLoaded,
} from '../../../tasks/response_console';
import { interceptActionRequests, sendActionResponse } from '../../../tasks/isolate';
import { login } from '../../../tasks/login';

// Failing: See https://github.com/elastic/kibana/issues/203919
describe.skip('Response console', { tags: ['@ess', '@serverless', '@brokenInServerless'] }, () => {
  beforeEach(() => {
    login();
  });

  describe('`kill-process` command', () => {
    let endpointData: ReturnTypeFromChainable<typeof indexEndpointHosts>;
    let endpointHostname: string;
    let killProcessRequestResponse: ActionDetails;

    beforeEach(() => {
      indexEndpointHosts({ withResponseActions: false, isolation: false }).then(
        (indexEndpoints) => {
          endpointData = indexEndpoints;
          endpointHostname = endpointData.data.hosts[0].host.name;
        }
      );
    });

    afterEach(() => {
      if (endpointData) {
        endpointData.cleanup();
        // @ts-expect-error ignore setting to undefined
        endpointData = undefined;
      }
    });

    it('should kill process from response console', () => {
      waitForEndpointListPageToBeLoaded(endpointHostname);
      openResponseConsoleFromEndpointList();
      inputConsoleCommand(`kill-process --pid 1`);

      interceptActionRequests((responseBody) => {
        killProcessRequestResponse = responseBody;
      }, 'kill-process');
      submitCommand();
      cy.contains('Action pending.').should('exist');
      cy.wait('@kill-process').then(() => {
        sendActionResponse(killProcessRequestResponse);
      });
      cy.contains('Action completed.', { timeout: 120000 }).should('exist');
    });
  });
});
