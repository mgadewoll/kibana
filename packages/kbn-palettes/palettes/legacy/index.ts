/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import { KbnPalettes } from '../../classes/palettes';

import {
  kibana7Palette,
  kibana4Palette,
  elasticClassicPalette,
  getNeutralPalette,
  kibana7BehindText,
} from './categorical';
import {
  complementaryPalette,
  coolPalette,
  grayPalette,
  greenPalette,
  redPalette,
  statusPalette,
  temperaturePalette,
  warmPalette,
} from './gradient';

export const getLegacyPalettes = (darkMode: boolean) =>
  new KbnPalettes(
    [
      kibana7Palette,
      kibana4Palette,
      kibana7BehindText,
      getNeutralPalette(darkMode),
      complementaryPalette,
      coolPalette,
      grayPalette,
      greenPalette,
      redPalette,
      statusPalette,
      temperaturePalette,
      warmPalette,
      elasticClassicPalette,
    ],
    kibana7Palette
  );
