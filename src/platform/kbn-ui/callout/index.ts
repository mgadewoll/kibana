/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import { KbnInfoCallout, type KbnInfoCalloutProps } from './src/info_callout';
import { KbnSuccessCallout, type KbnSuccessCalloutProps } from './src/success_callout';
import { KbnWarningCallout, type KbnWarningCalloutProps } from './src/warning_callout';
import { KbnDangerCallout, type KbnDangerCalloutProps } from './src/danger_callout';

export {
  KbnInfoCallout,
  KbnSuccessCallout,
  KbnWarningCallout,
  KbnDangerCallout,
  type KbnInfoCalloutProps,
  type KbnSuccessCalloutProps,
  type KbnWarningCalloutProps,
  type KbnDangerCalloutProps,
};

/**
 * Utility map for type-to-callout mapping.
 * This helps prevent implementations from having to repeat the mapping.
 */
export const kbnCalloutMap = {
  primary: KbnInfoCallout,
  success: KbnSuccessCallout,
  warning: KbnWarningCallout,
  danger: KbnDangerCallout,
} as const;
