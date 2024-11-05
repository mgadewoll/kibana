/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import { DEFAULT_THEME_VERSION } from '@kbn/core-ui-settings-common';
import type { CoreTheme } from '@kbn/core/public';
import { Observable } from 'rxjs';

export const defaultTheme$: Observable<CoreTheme> = new Observable((subscriber) =>
  subscriber.next({ darkMode: false, version: DEFAULT_THEME_VERSION })
);
