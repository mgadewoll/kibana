/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import { _EuiThemeVisColors } from '@elastic/eui-theme-common';
import {
  euiPaletteColorBlind as _euiPaletteColorBlind,
  euiPaletteColorBlindBehindText as _euiPaletteColorBlindBehindText,
  euiPaletteForStatus as _euiPaletteForStatus,
  euiPaletteForTemperature as _euiPaletteForTemperature,
  euiPaletteComplementary as _euiPaletteComplementary,
  euiPaletteRed as _euiPaletteRed,
  euiPaletteGreen as _euiPaletteGreen,
  euiPaletteCool as _euiPaletteCool,
  euiPaletteWarm as _euiPaletteWarm,
  euiPaletteGray as _euiPaletteGray,
  EuiPaletteCommonProps,
  EuiPaletteRotationProps,
} from '@elastic/eui';

import { euiThemeVars } from './theme';

/**
 * Utility wrappers around EUI palette functions that pass static
 * JSON tokens instead of relying on the react context.
 */

export const euiPaletteColorBlind = (args: EuiPaletteRotationProps = {}) => {
  const commonColorArgs = _getCommonColorArgs();

  return _euiPaletteColorBlind({ ...args, ...commonColorArgs });
};

export const euiPaletteColorBlindBehindText = (args: EuiPaletteRotationProps = {}) => {
  const commonColorArgs = _getCommonColorArgs();

  return _euiPaletteColorBlindBehindText({ ...args, ...commonColorArgs });
};

export const euiPaletteForStatus = (steps: number) => {
  const commonColorArgs = _getCommonColorArgs();

  return _euiPaletteForStatus(steps, { ...commonColorArgs });
};

export const euiPaletteForTemperature = (steps: number) => {
  const commonColorArgs = _getCommonColorArgs();

  return _euiPaletteForTemperature(steps, { ...commonColorArgs });
};

export const euiPaletteComplementary = (steps: number) => {
  const commonColorArgs = _getCommonColorArgs();

  return _euiPaletteComplementary(steps, { ...commonColorArgs });
};

export const euiPaletteRed = (steps: number) => {
  const commonColorArgs = _getCommonColorArgs();

  return _euiPaletteRed(steps, { ...commonColorArgs });
};

export const euiPaletteGreen = (steps: number) => {
  const commonColorArgs = _getCommonColorArgs();

  return _euiPaletteGreen(steps, { ...commonColorArgs });
};

export const euiPaletteCool = (steps: number) => {
  const commonColorArgs = _getCommonColorArgs();

  return _euiPaletteCool(steps, { ...commonColorArgs });
};

export const euiPaletteWarm = (steps: number) => {
  const commonColorArgs = _getCommonColorArgs();

  return _euiPaletteWarm(steps, { ...commonColorArgs });
};

export const euiPaletteGray = (steps: number) => {
  const commonColorArgs = _getCommonColorArgs();

  return _euiPaletteGray(steps, { ...commonColorArgs });
};

const _getCommonColorArgs = (): EuiPaletteCommonProps => {
  const globals: any = typeof window === 'undefined' ? {} : window;
  const isAmsterdam = globals?.__kbnThemeTag__?.includes('borealis') !== true;

  const visColors: _EuiThemeVisColors = {
    euiColorVis0: euiThemeVars.euiColorVis0,
    euiColorVis1: euiThemeVars.euiColorVis1,
    euiColorVis2: euiThemeVars.euiColorVis2,
    euiColorVis3: euiThemeVars.euiColorVis3,
    euiColorVis4: euiThemeVars.euiColorVis4,
    euiColorVis5: euiThemeVars.euiColorVis5,
    euiColorVis6: euiThemeVars.euiColorVis6,
    euiColorVis7: euiThemeVars.euiColorVis7,
    euiColorVis8: euiThemeVars.euiColorVis8,
    euiColorVis9: euiThemeVars.euiColorVis9,
    euiColorVisBehindText0: euiThemeVars.euiColorVis0_behindText,
    euiColorVisBehindText1: euiThemeVars.euiColorVis1_behindText,
    euiColorVisBehindText2: euiThemeVars.euiColorVis2_behindText,
    euiColorVisBehindText3: euiThemeVars.euiColorVis3_behindText,
    euiColorVisBehindText4: euiThemeVars.euiColorVis4_behindText,
    euiColorVisBehindText5: euiThemeVars.euiColorVis5_behindText,
    euiColorVisBehindText6: euiThemeVars.euiColorVis6_behindText,
    euiColorVisBehindText7: euiThemeVars.euiColorVis7_behindText,
    euiColorVisBehindText8: euiThemeVars.euiColorVis8_behindText,
    euiColorVisBehindText9: euiThemeVars.euiColorVis9_behindText,
    euiColorVisAsTextLight0: euiThemeVars.euiColorVisAsTextLight0,
    euiColorVisAsTextLight1: euiThemeVars.euiColorVisAsTextLight1,
    euiColorVisAsTextLight2: euiThemeVars.euiColorVisAsTextLight2,
    euiColorVisAsTextLight3: euiThemeVars.euiColorVisAsTextLight3,
    euiColorVisAsTextLight4: euiThemeVars.euiColorVisAsTextLight4,
    euiColorVisAsTextLight5: euiThemeVars.euiColorVisAsTextLight5,
    euiColorVisAsTextLight6: euiThemeVars.euiColorVisAsTextLight6,
    euiColorVisAsTextDark0: euiThemeVars.euiColorVisAsTextDark0,
    euiColorVisAsTextDark1: euiThemeVars.euiColorVisAsTextDark1,
    euiColorVisAsTextDark2: euiThemeVars.euiColorVisAsTextDark2,
    euiColorVisAsTextDark3: euiThemeVars.euiColorVisAsTextDark3,
    euiColorVisAsTextDark4: euiThemeVars.euiColorVisAsTextDark4,
    euiColorVisAsTextDark5: euiThemeVars.euiColorVisAsTextDark5,
    euiColorVisAsTextDark6: euiThemeVars.euiColorVisAsTextDark6,
    euiColorVisSuccess0: euiThemeVars.euiColorVisSuccess0,
    euiColorVisSuccess1: euiThemeVars.euiColorVisSuccess1,
    euiColorVisWarning0: euiThemeVars.euiColorVisWarning0,
    euiColorVisDanger0: euiThemeVars.euiColorVisDanger0,
    euiColorVisDanger1: euiThemeVars.euiColorVisDanger1,
    euiColorVisNeutral0: euiThemeVars.euiColorVisNeutral0,
    euiColorVisGrey0: euiThemeVars.euiColorVisGrey0,
    euiColorVisGrey1: euiThemeVars.euiColorVisGrey1,
    euiColorVisGrey2: euiThemeVars.euiColorVisGrey2,
    euiColorVisGrey3: euiThemeVars.euiColorVisGrey3,
    euiColorVisWarm0: euiThemeVars.euiColorVisWarm0,
    euiColorVisWarm1: euiThemeVars.euiColorVisWarm1,
    euiColorVisWarm2: euiThemeVars.euiColorVisWarm2,
    euiColorVisCool0: euiThemeVars.euiColorVisCool0,
    euiColorVisCool1: euiThemeVars.euiColorVisCool1,
    euiColorVisCool2: euiThemeVars.euiColorVisCool2,
    euiColorVisComplementary0: euiThemeVars.euiColorVisComplementary0,
    euiColorVisComplementary1: euiThemeVars.euiColorVisComplementary1,
    euiColorSeverity0: euiThemeVars.euiColorSeverity0,
    euiColorSeverity1: euiThemeVars.euiColorSeverity1,
    euiColorSeverity2: euiThemeVars.euiColorSeverity2,
    euiColorSeverity3: euiThemeVars.euiColorSeverity3,
    euiColorSeverity4: euiThemeVars.euiColorSeverity4,
    euiColorSeverity5: euiThemeVars.euiColorSeverity5,
    euiColorSeverity6: euiThemeVars.euiColorSeverity6,
    euiColorSeverity7: euiThemeVars.euiColorSeverity7,
    euiColorSeverity8: euiThemeVars.euiColorSeverity8,
    euiColorSeverity9: euiThemeVars.euiColorSeverity9,
    euiColorSeverity10: euiThemeVars.euiColorSeverity10,
    euiColorSeverity11: euiThemeVars.euiColorSeverity11,
    euiColorSeverity12: euiThemeVars.euiColorSeverity12,
    euiColorSeverity13: euiThemeVars.euiColorSeverity13,
    euiColorSeverity14: euiThemeVars.euiColorSeverity14,
  };

  return {
    colors: visColors,
    hasVisColorAdjustment: isAmsterdam,
  };
};
