/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import { useEuiTheme } from '@elastic/eui';
import type { ReactWrapper } from 'enzyme';
import type { FC } from 'react';
import React, { useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { BehaviorSubject } from 'rxjs';

import { mountWithIntl } from '@kbn/test-jest-helpers';

import type { KibanaTheme } from '@kbn/react-kibana-context-common';
import { DEFAULT_THEME_VERSION } from '@kbn/core-ui-settings-common';
import { KibanaThemeProvider } from './theme_provider';

describe('KibanaThemeProvider', () => {
  let euiTheme: ReturnType<typeof useEuiTheme> | undefined;

  beforeEach(() => {
    euiTheme = undefined;
  });

  const flushPromises = async () => {
    await new Promise<void>(async (resolve, reject) => {
      try {
        setImmediate(() => resolve());
      } catch (error) {
        reject(error);
      }
    });
  };

  const InnerComponent: FC = () => {
    const theme = useEuiTheme();
    useEffect(() => {
      euiTheme = theme;
    }, [theme]);
    return <div>foo</div>;
  };

  const refresh = async (wrapper: ReactWrapper<unknown>) => {
    await act(async () => {
      await flushPromises();
      wrapper.update();
    });
  };

  it('exposes the EUI theme provider', async () => {
    const coreTheme$ = new BehaviorSubject<KibanaTheme>({
      darkMode: true,
      version: DEFAULT_THEME_VERSION,
    });

    const wrapper = mountWithIntl(
      <KibanaThemeProvider theme={{ theme$: coreTheme$ }}>
        <InnerComponent />
      </KibanaThemeProvider>
    );

    await refresh(wrapper);

    expect(euiTheme!.colorMode).toEqual('DARK');
  });

  it('propagates changes of the coreTheme observable', async () => {
    const coreTheme$ = new BehaviorSubject<KibanaTheme>({
      darkMode: true,
      version: DEFAULT_THEME_VERSION,
    });

    const wrapper = mountWithIntl(
      <KibanaThemeProvider theme={{ theme$: coreTheme$ }}>
        <InnerComponent />
      </KibanaThemeProvider>
    );

    await refresh(wrapper);

    expect(euiTheme!.colorMode).toEqual('DARK');

    await act(async () => {
      coreTheme$.next({ darkMode: false, version: DEFAULT_THEME_VERSION });
    });

    await refresh(wrapper);

    expect(euiTheme!.colorMode).toEqual('LIGHT');
  });
});
