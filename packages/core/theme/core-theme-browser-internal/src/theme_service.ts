/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import { of } from 'rxjs';
import { _setDarkMode } from '@kbn/ui-theme';
import type { InjectedMetadataTheme } from '@kbn/core-injected-metadata-common-internal';
import type { InternalInjectedMetadataSetup } from '@kbn/core-injected-metadata-browser-internal';
import type { CoreTheme, ThemeServiceSetup, ThemeServiceStart } from '@kbn/core-theme-browser';
import { DEFAULT_THEME_VERSION } from '@kbn/core-ui-settings-common';
import { systemThemeIsDark, browsersSupportsSystemTheme } from './system_theme';
import { createStyleSheet } from './utils';

/** @internal */
export interface ThemeServiceSetupDeps {
  injectedMetadata: InternalInjectedMetadataSetup;
}

/** @internal */
export class ThemeService {
  private contract?: ThemeServiceSetup;
  private themeMetadata?: InjectedMetadataTheme;
  private stylesheets: HTMLLinkElement[] = [];

  public setup({ injectedMetadata }: ThemeServiceSetupDeps): ThemeServiceSetup {
    const themeMetadata = injectedMetadata.getTheme();
    this.themeMetadata = themeMetadata;

    let darkMode: boolean;
    if (themeMetadata.darkMode === 'system' && browsersSupportsSystemTheme()) {
      darkMode = systemThemeIsDark();
    } else {
      darkMode = themeMetadata.darkMode === 'system' ? false : themeMetadata.darkMode;
    }

    const theme: CoreTheme = {
      darkMode,
      version: themeMetadata.version,
    };

    this.applyTheme(theme);

    this.contract = {
      getTheme: () => theme,
      theme$: of(theme),
    };

    return this.contract;
  }

  public start(): ThemeServiceStart {
    if (!this.contract) {
      throw new Error('setup must be called before start');
    }

    return this.contract;
  }

  public stop() {}

  private applyTheme(theme: CoreTheme) {
    const { darkMode } = theme;
    this.stylesheets.forEach((stylesheet) => {
      stylesheet.remove();
    });
    this.stylesheets = [];
    const newStylesheets = darkMode
      ? this.themeMetadata!.stylesheetPaths.dark
      : this.themeMetadata!.stylesheetPaths.default;

    newStylesheets.forEach((stylesheet) => {
      this.stylesheets.push(createStyleSheet({ href: stylesheet }));
    });

    _setDarkMode(darkMode);
    updateKbnThemeTag(darkMode, this.themeMetadata?.version);
  }
}

const updateKbnThemeTag = (darkMode: boolean, themeVersion?: string) => {
  const globals: any = typeof window === 'undefined' ? {} : window;
  const version = themeVersion ?? DEFAULT_THEME_VERSION;

  globals.__kbnThemeTag__ = darkMode ? `${version}dark` : `${version}light`;
};
