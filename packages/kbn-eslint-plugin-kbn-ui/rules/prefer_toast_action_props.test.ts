/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import { RuleTester } from 'eslint';
import { PreferToastActionProps } from './prefer_toast_action_props';

const tester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: { jsx: true },
  },
});

const MOUNT_WRAPPERS = [
  { fn: 'mountReactNode', wrap: (jsx: string) => `mountReactNode(${jsx})` },
  { fn: 'toMountPoint', wrap: (jsx: string) => `toMountPoint(${jsx}, services)` },
];

tester.run('prefer_toast_action_props', PreferToastActionProps, {
  valid: [
    {
      name: 'actionProps usage is allowed',
      code: `toasts.addSuccess({ title: 'Done', actionProps: { primary: { label: 'View' } } });`,
    },
    { name: 'no actionProps field is allowed', code: `toasts.addSuccess({ title: 'Done' });` },
    ...MOUNT_WRAPPERS.flatMap(({ fn, wrap }) => [
      {
        name: `custom component inside ${fn} is not flagged`,
        code: `toasts.addSuccess({ title: 'Done', text: ${wrap(
          '<MyCustomWidget data={data} />'
        )} });`,
      },
      {
        name: `action element nested inside an unknown custom container in ${fn} is not flagged`,
        code: `toasts.addSuccess({ title: 'Done', text: ${wrap(
          `<ComplexLayout>
            <EuiButton>Action</EuiButton>
          </ComplexLayout>`
        )} });`,
      },
      {
        name: `non-toast method is not flagged`,
        code: `someService.doSomething({ text: ${wrap('<EuiButton>Action</EuiButton>')} });`,
      },
    ]),
  ],
  invalid: [
    // EuiButton
    ...MOUNT_WRAPPERS.map(({ fn, wrap }) => ({
      name: `EuiButton inside ${fn} is flagged`,
      code: `toasts.addSuccess({ title: 'Title', text: ${wrap(
        '<EuiButton>Reload</EuiButton>'
      )} });`,
      errors: [
        {
          messageId: 'actionElementInMountContent',
          data: { elementName: 'EuiButton', method: 'addSuccess', mountFn: fn },
        },
      ],
    })),
    // EuiButtonEmpty
    ...MOUNT_WRAPPERS.map(({ fn, wrap }) => ({
      name: `EuiButtonEmpty inside ${fn} is flagged`,
      code: `toasts.addWarning({ title: 'Title', text: ${wrap(
        '<EuiButtonEmpty>Dismiss</EuiButtonEmpty>'
      )} });`,
      errors: [
        {
          messageId: 'actionElementInMountContent',
          data: { elementName: 'EuiButtonEmpty', method: 'addWarning', mountFn: fn },
        },
      ],
    })),
    // button
    ...MOUNT_WRAPPERS.map(({ fn, wrap }) => ({
      name: `button inside ${fn} is flagged`,
      code: `toasts.addInfo({ title: 'Title', text: ${wrap('<button>Click</button>')} });`,
      errors: [
        {
          messageId: 'actionElementInMountContent',
          data: { elementName: 'button', method: 'addInfo', mountFn: fn },
        },
      ],
    })),
    // EuiLink
    ...MOUNT_WRAPPERS.map(({ fn, wrap }) => ({
      name: `EuiLink inside ${fn} is flagged`,
      code: `toasts.addDanger({ title: 'Title', text: ${wrap(
        '<EuiLink href="/details">View details</EuiLink>'
      )} });`,
      errors: [
        {
          messageId: 'actionElementInMountContent',
          data: { elementName: 'EuiLink', method: 'addDanger', mountFn: fn },
        },
      ],
    })),
    // action element nested inside transparent containers
    ...MOUNT_WRAPPERS.map(({ fn, wrap }) => ({
      name: `EuiButton nested inside EuiFlexGroup/EuiFlexItem in ${fn} is flagged`,
      code: `
        toasts.addSuccess({
          title: 'Saved',
          text: ${wrap(
            `<EuiFlexGroup justifyContent="flexEnd">
              <EuiFlexItem grow={false}>
              <EuiButton>Reload</EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>`
          )},
        });
      `,
      errors: [
        {
          messageId: 'actionElementInMountContent',
          data: { elementName: 'EuiButton', method: 'addSuccess', mountFn: fn },
        },
      ],
    })),
    // conditional/logical expressions
    ...MOUNT_WRAPPERS.map(({ fn, wrap }) => ({
      name: `EuiButton inside a logical expression in ${fn} is flagged`,
      code: `toasts.addSuccess({ title: 'Done', text: ${wrap(
        'show && <EuiButton>View</EuiButton>'
      )} });`,
      errors: [
        {
          messageId: 'actionElementInMountContent',
          data: { elementName: 'EuiButton', method: 'addSuccess', mountFn: fn },
        },
      ],
    })),
    ...MOUNT_WRAPPERS.map(({ fn, wrap }) => ({
      name: `EuiButton in conditional consequent in ${fn} is flagged`,
      code: `toasts.addSuccess({ title: 'Done', text: ${wrap(
        'show ? <EuiButton>View</EuiButton> : null'
      )} });`,
      errors: [
        {
          messageId: 'actionElementInMountContent',
          data: { elementName: 'EuiButton', method: 'addSuccess', mountFn: fn },
        },
      ],
    })),
    // combination of text and action flaggs the action
    ...MOUNT_WRAPPERS.map(({ fn, wrap }) => ({
      name: `action is flagged in ${fn} with single text content`,
      code: `
        notifications.toasts.addInfo({
          title: 'System color mode updated',
          text: ${wrap(
            `<>
              <p>Reload the page to see the changes</p>
              <EuiFlexGroup justifyContent="flexEnd" gutterSize="s">
                <EuiFlexItem grow={false}>
                  <EuiButton>Reload page</EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
            </>`
          )},
        });
      `,
      errors: [
        {
          messageId: 'actionElementInMountContent',
          data: { elementName: 'EuiButton', method: 'addInfo', mountFn: fn },
        },
      ],
    })),
    ...MOUNT_WRAPPERS.map(({ fn, wrap }) => ({
      name: `action is flagged in ${fn} with multiple text content`,
      code: `
        toasts.addSuccess({
          title: 'Done',
          text: ${wrap(
            `<>
              <p>First paragraph.</p>
              <p>Second paragraph.</p>
              <EuiButton>View</EuiButton>
            </>`
          )},
        });
      `,
      errors: [
        {
          messageId: 'actionElementInMountContent',
          data: { elementName: 'EuiButton', method: 'addSuccess', mountFn: fn },
        },
      ],
    })),
  ],
});
