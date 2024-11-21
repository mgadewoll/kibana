/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

/**
 * __AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.__
 *
 * @note This file is generated by the `generate_function_definitions.ts`
 * script. Do not edit it manually.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

import { i18n } from '@kbn/i18n';
import type { FunctionDefinition } from '../types';

// Do not edit this manually... generated by scripts/generate_function_definitions.ts
const avgDefinition: FunctionDefinition = {
  type: 'agg',
  name: 'avg',
  description: i18n.translate('kbn-esql-validation-autocomplete.esql.definitions.avg', {
    defaultMessage: 'The average of a numeric field.',
  }),
  preview: false,
  alias: undefined,
  signatures: [
    {
      params: [
        {
          name: 'number',
          type: 'double',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'integer',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'long',
          optional: false,
        },
      ],
      returnType: 'double',
    },
  ],
  supportedCommands: ['stats', 'inlinestats', 'metrics'],
  supportedOptions: undefined,
  validate: undefined,
  examples: [
    'FROM employees\n| STATS AVG(height)',
    'FROM employees\n| STATS avg_salary_change = ROUND(AVG(MV_AVG(salary_change)), 10)',
  ],
};

// Do not edit this manually... generated by scripts/generate_function_definitions.ts
const countDefinition: FunctionDefinition = {
  type: 'agg',
  name: 'count',
  description: i18n.translate('kbn-esql-validation-autocomplete.esql.definitions.count', {
    defaultMessage: 'Returns the total number (count) of input values.',
  }),
  preview: false,
  alias: undefined,
  signatures: [
    {
      params: [
        {
          name: 'field',
          type: 'boolean',
          optional: true,
          supportsWildcard: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'cartesian_point',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'date',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'double',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'geo_point',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'integer',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'ip',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'keyword',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'text',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'unsigned_long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'version',
          optional: true,
        },
      ],
      returnType: 'long',
    },
  ],
  supportedCommands: ['stats', 'inlinestats', 'metrics'],
  supportedOptions: undefined,
  validate: undefined,
  examples: [
    'FROM employees\n| STATS COUNT(height)',
    'FROM employees\n| STATS count = COUNT(*) BY languages\n| SORT languages DESC',
    'ROW words="foo;bar;baz;qux;quux;foo"\n| STATS word_count = COUNT(SPLIT(words, ";"))',
    'ROW n=1\n| WHERE n < 0\n| STATS COUNT(n)',
    'ROW n=1\n| STATS COUNT(n > 0 OR NULL), COUNT(n < 0 OR NULL)',
  ],
};

// Do not edit this manually... generated by scripts/generate_function_definitions.ts
const countDistinctDefinition: FunctionDefinition = {
  type: 'agg',
  name: 'count_distinct',
  description: i18n.translate('kbn-esql-validation-autocomplete.esql.definitions.count_distinct', {
    defaultMessage: 'Returns the approximate number of distinct values.',
  }),
  preview: false,
  alias: undefined,
  signatures: [
    {
      params: [
        {
          name: 'field',
          type: 'boolean',
          optional: false,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'boolean',
          optional: false,
        },
        {
          name: 'precision',
          type: 'integer',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'boolean',
          optional: false,
        },
        {
          name: 'precision',
          type: 'long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'boolean',
          optional: false,
        },
        {
          name: 'precision',
          type: 'unsigned_long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'date',
          optional: false,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'date',
          optional: false,
        },
        {
          name: 'precision',
          type: 'integer',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'date',
          optional: false,
        },
        {
          name: 'precision',
          type: 'long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'date',
          optional: false,
        },
        {
          name: 'precision',
          type: 'unsigned_long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'date_nanos',
          optional: false,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'date_nanos',
          optional: false,
        },
        {
          name: 'precision',
          type: 'integer',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'date_nanos',
          optional: false,
        },
        {
          name: 'precision',
          type: 'long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'date_nanos',
          optional: false,
        },
        {
          name: 'precision',
          type: 'unsigned_long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'double',
          optional: false,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'double',
          optional: false,
        },
        {
          name: 'precision',
          type: 'integer',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'double',
          optional: false,
        },
        {
          name: 'precision',
          type: 'long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'double',
          optional: false,
        },
        {
          name: 'precision',
          type: 'unsigned_long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'integer',
          optional: false,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'integer',
          optional: false,
        },
        {
          name: 'precision',
          type: 'integer',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'integer',
          optional: false,
        },
        {
          name: 'precision',
          type: 'long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'integer',
          optional: false,
        },
        {
          name: 'precision',
          type: 'unsigned_long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'ip',
          optional: false,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'ip',
          optional: false,
        },
        {
          name: 'precision',
          type: 'integer',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'ip',
          optional: false,
        },
        {
          name: 'precision',
          type: 'long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'ip',
          optional: false,
        },
        {
          name: 'precision',
          type: 'unsigned_long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'keyword',
          optional: false,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'keyword',
          optional: false,
        },
        {
          name: 'precision',
          type: 'integer',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'keyword',
          optional: false,
        },
        {
          name: 'precision',
          type: 'long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'keyword',
          optional: false,
        },
        {
          name: 'precision',
          type: 'unsigned_long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'long',
          optional: false,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'long',
          optional: false,
        },
        {
          name: 'precision',
          type: 'integer',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'long',
          optional: false,
        },
        {
          name: 'precision',
          type: 'long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'long',
          optional: false,
        },
        {
          name: 'precision',
          type: 'unsigned_long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'text',
          optional: false,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'text',
          optional: false,
        },
        {
          name: 'precision',
          type: 'integer',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'text',
          optional: false,
        },
        {
          name: 'precision',
          type: 'long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'text',
          optional: false,
        },
        {
          name: 'precision',
          type: 'unsigned_long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'version',
          optional: false,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'version',
          optional: false,
        },
        {
          name: 'precision',
          type: 'integer',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'version',
          optional: false,
        },
        {
          name: 'precision',
          type: 'long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'version',
          optional: false,
        },
        {
          name: 'precision',
          type: 'unsigned_long',
          optional: true,
        },
      ],
      returnType: 'long',
    },
  ],
  supportedCommands: ['stats', 'inlinestats', 'metrics'],
  supportedOptions: undefined,
  validate: undefined,
  examples: [
    'FROM hosts\n| STATS COUNT_DISTINCT(ip0), COUNT_DISTINCT(ip1)',
    'FROM hosts\n| STATS COUNT_DISTINCT(ip0, 80000), COUNT_DISTINCT(ip1, 5)',
    'ROW words="foo;bar;baz;qux;quux;foo"\n| STATS distinct_word_count = COUNT_DISTINCT(SPLIT(words, ";"))',
  ],
};

// Do not edit this manually... generated by scripts/generate_function_definitions.ts
const maxDefinition: FunctionDefinition = {
  type: 'agg',
  name: 'max',
  description: i18n.translate('kbn-esql-validation-autocomplete.esql.definitions.max', {
    defaultMessage: 'The maximum value of a field.',
  }),
  preview: false,
  alias: undefined,
  signatures: [
    {
      params: [
        {
          name: 'field',
          type: 'boolean',
          optional: false,
        },
      ],
      returnType: 'boolean',
    },
    {
      params: [
        {
          name: 'field',
          type: 'date',
          optional: false,
        },
      ],
      returnType: 'date',
    },
    {
      params: [
        {
          name: 'field',
          type: 'date_nanos',
          optional: false,
        },
      ],
      returnType: 'date_nanos',
    },
    {
      params: [
        {
          name: 'field',
          type: 'double',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'field',
          type: 'integer',
          optional: false,
        },
      ],
      returnType: 'integer',
    },
    {
      params: [
        {
          name: 'field',
          type: 'ip',
          optional: false,
        },
      ],
      returnType: 'ip',
    },
    {
      params: [
        {
          name: 'field',
          type: 'keyword',
          optional: false,
        },
      ],
      returnType: 'keyword',
    },
    {
      params: [
        {
          name: 'field',
          type: 'long',
          optional: false,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'text',
          optional: false,
        },
      ],
      returnType: 'keyword',
    },
    {
      params: [
        {
          name: 'field',
          type: 'version',
          optional: false,
        },
      ],
      returnType: 'version',
    },
  ],
  supportedCommands: ['stats', 'inlinestats', 'metrics'],
  supportedOptions: undefined,
  validate: undefined,
  examples: [
    'FROM employees\n| STATS MAX(languages)',
    'FROM employees\n| STATS max_avg_salary_change = MAX(MV_AVG(salary_change))',
  ],
};

// Do not edit this manually... generated by scripts/generate_function_definitions.ts
const medianDefinition: FunctionDefinition = {
  type: 'agg',
  name: 'median',
  description: i18n.translate('kbn-esql-validation-autocomplete.esql.definitions.median', {
    defaultMessage:
      'The value that is greater than half of all values and less than half of all values, also known as the 50% `PERCENTILE`.',
  }),
  preview: false,
  alias: undefined,
  signatures: [
    {
      params: [
        {
          name: 'number',
          type: 'double',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'integer',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'long',
          optional: false,
        },
      ],
      returnType: 'double',
    },
  ],
  supportedCommands: ['stats', 'inlinestats', 'metrics'],
  supportedOptions: undefined,
  validate: undefined,
  examples: [
    'FROM employees\n| STATS MEDIAN(salary), PERCENTILE(salary, 50)',
    'FROM employees\n| STATS median_max_salary_change = MEDIAN(MV_MAX(salary_change))',
  ],
};

// Do not edit this manually... generated by scripts/generate_function_definitions.ts
const medianAbsoluteDeviationDefinition: FunctionDefinition = {
  type: 'agg',
  name: 'median_absolute_deviation',
  description: i18n.translate(
    'kbn-esql-validation-autocomplete.esql.definitions.median_absolute_deviation',
    {
      defaultMessage:
        "Returns the median absolute deviation, a measure of variability. It is a robust statistic, meaning that it is useful for describing data that may have outliers, or may not be normally distributed. For such data it can be more descriptive than standard deviation.\n\nIt is calculated as the median of each data point's deviation from the median of the entire sample. That is, for a random variable `X`, the median absolute deviation is `median(|median(X) - X|)`.",
    }
  ),
  preview: false,
  alias: undefined,
  signatures: [
    {
      params: [
        {
          name: 'number',
          type: 'double',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'integer',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'long',
          optional: false,
        },
      ],
      returnType: 'double',
    },
  ],
  supportedCommands: ['stats', 'inlinestats', 'metrics'],
  supportedOptions: undefined,
  validate: undefined,
  examples: [
    'FROM employees\n| STATS MEDIAN(salary), MEDIAN_ABSOLUTE_DEVIATION(salary)',
    'FROM employees\n| STATS m_a_d_max_salary_change = MEDIAN_ABSOLUTE_DEVIATION(MV_MAX(salary_change))',
  ],
};

// Do not edit this manually... generated by scripts/generate_function_definitions.ts
const minDefinition: FunctionDefinition = {
  type: 'agg',
  name: 'min',
  description: i18n.translate('kbn-esql-validation-autocomplete.esql.definitions.min', {
    defaultMessage: 'The minimum value of a field.',
  }),
  preview: false,
  alias: undefined,
  signatures: [
    {
      params: [
        {
          name: 'field',
          type: 'boolean',
          optional: false,
        },
      ],
      returnType: 'boolean',
    },
    {
      params: [
        {
          name: 'field',
          type: 'date',
          optional: false,
        },
      ],
      returnType: 'date',
    },
    {
      params: [
        {
          name: 'field',
          type: 'date_nanos',
          optional: false,
        },
      ],
      returnType: 'date_nanos',
    },
    {
      params: [
        {
          name: 'field',
          type: 'double',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'field',
          type: 'integer',
          optional: false,
        },
      ],
      returnType: 'integer',
    },
    {
      params: [
        {
          name: 'field',
          type: 'ip',
          optional: false,
        },
      ],
      returnType: 'ip',
    },
    {
      params: [
        {
          name: 'field',
          type: 'keyword',
          optional: false,
        },
      ],
      returnType: 'keyword',
    },
    {
      params: [
        {
          name: 'field',
          type: 'long',
          optional: false,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'text',
          optional: false,
        },
      ],
      returnType: 'keyword',
    },
    {
      params: [
        {
          name: 'field',
          type: 'version',
          optional: false,
        },
      ],
      returnType: 'version',
    },
  ],
  supportedCommands: ['stats', 'inlinestats', 'metrics'],
  supportedOptions: undefined,
  validate: undefined,
  examples: [
    'FROM employees\n| STATS MIN(languages)',
    'FROM employees\n| STATS min_avg_salary_change = MIN(MV_AVG(salary_change))',
  ],
};

// Do not edit this manually... generated by scripts/generate_function_definitions.ts
const percentileDefinition: FunctionDefinition = {
  type: 'agg',
  name: 'percentile',
  description: i18n.translate('kbn-esql-validation-autocomplete.esql.definitions.percentile', {
    defaultMessage:
      'Returns the value at which a certain percentage of observed values occur. For example, the 95th percentile is the value which is greater than 95% of the observed values and the 50th percentile is the `MEDIAN`.',
  }),
  preview: false,
  alias: undefined,
  signatures: [
    {
      params: [
        {
          name: 'number',
          type: 'double',
          optional: false,
        },
        {
          name: 'percentile',
          type: 'double',
          optional: false,
          constantOnly: true,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'double',
          optional: false,
        },
        {
          name: 'percentile',
          type: 'integer',
          optional: false,
          constantOnly: true,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'double',
          optional: false,
        },
        {
          name: 'percentile',
          type: 'long',
          optional: false,
          constantOnly: true,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'integer',
          optional: false,
        },
        {
          name: 'percentile',
          type: 'double',
          optional: false,
          constantOnly: true,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'integer',
          optional: false,
        },
        {
          name: 'percentile',
          type: 'integer',
          optional: false,
          constantOnly: true,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'integer',
          optional: false,
        },
        {
          name: 'percentile',
          type: 'long',
          optional: false,
          constantOnly: true,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'long',
          optional: false,
        },
        {
          name: 'percentile',
          type: 'double',
          optional: false,
          constantOnly: true,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'long',
          optional: false,
        },
        {
          name: 'percentile',
          type: 'integer',
          optional: false,
          constantOnly: true,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'long',
          optional: false,
        },
        {
          name: 'percentile',
          type: 'long',
          optional: false,
          constantOnly: true,
        },
      ],
      returnType: 'double',
    },
  ],
  supportedCommands: ['stats', 'inlinestats', 'metrics'],
  supportedOptions: undefined,
  validate: undefined,
  examples: [
    'FROM employees\n| STATS p0 = PERCENTILE(salary,  0)\n     , p50 = PERCENTILE(salary, 50)\n     , p99 = PERCENTILE(salary, 99)',
    'FROM employees\n| STATS p80_max_salary_change = PERCENTILE(MV_MAX(salary_change), 80)',
  ],
};

// Do not edit this manually... generated by scripts/generate_function_definitions.ts
const stCentroidAggDefinition: FunctionDefinition = {
  type: 'agg',
  name: 'st_centroid_agg',
  description: i18n.translate('kbn-esql-validation-autocomplete.esql.definitions.st_centroid_agg', {
    defaultMessage: 'Calculate the spatial centroid over a field with spatial point geometry type.',
  }),
  preview: false,
  alias: undefined,
  signatures: [
    {
      params: [
        {
          name: 'field',
          type: 'cartesian_point',
          optional: false,
        },
      ],
      returnType: 'cartesian_point',
    },
    {
      params: [
        {
          name: 'field',
          type: 'geo_point',
          optional: false,
        },
      ],
      returnType: 'geo_point',
    },
  ],
  supportedCommands: ['stats', 'inlinestats', 'metrics'],
  supportedOptions: undefined,
  validate: undefined,
  examples: ['FROM airports\n| STATS centroid=ST_CENTROID_AGG(location)'],
};

// Do not edit this manually... generated by scripts/generate_function_definitions.ts
const sumDefinition: FunctionDefinition = {
  type: 'agg',
  name: 'sum',
  description: i18n.translate('kbn-esql-validation-autocomplete.esql.definitions.sum', {
    defaultMessage: 'The sum of a numeric expression.',
  }),
  preview: false,
  alias: undefined,
  signatures: [
    {
      params: [
        {
          name: 'number',
          type: 'double',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'integer',
          optional: false,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'number',
          type: 'long',
          optional: false,
        },
      ],
      returnType: 'long',
    },
  ],
  supportedCommands: ['stats', 'inlinestats', 'metrics'],
  supportedOptions: undefined,
  validate: undefined,
  examples: [
    'FROM employees\n| STATS SUM(languages)',
    'FROM employees\n| STATS total_salary_changes = SUM(MV_MAX(salary_change))',
  ],
};

// Do not edit this manually... generated by scripts/generate_function_definitions.ts
const topDefinition: FunctionDefinition = {
  type: 'agg',
  name: 'top',
  description: i18n.translate('kbn-esql-validation-autocomplete.esql.definitions.top', {
    defaultMessage: 'Collects the top values for a field. Includes repeated values.',
  }),
  preview: false,
  alias: undefined,
  signatures: [
    {
      params: [
        {
          name: 'field',
          type: 'boolean',
          optional: false,
        },
        {
          name: 'limit',
          type: 'integer',
          optional: false,
          constantOnly: true,
        },
        {
          name: 'order',
          type: 'keyword',
          optional: false,
          constantOnly: true,
          acceptedValues: ['asc', 'desc'],
        },
      ],
      returnType: 'boolean',
    },
    {
      params: [
        {
          name: 'field',
          type: 'date',
          optional: false,
        },
        {
          name: 'limit',
          type: 'integer',
          optional: false,
          constantOnly: true,
        },
        {
          name: 'order',
          type: 'keyword',
          optional: false,
          constantOnly: true,
          acceptedValues: ['asc', 'desc'],
        },
      ],
      returnType: 'date',
    },
    {
      params: [
        {
          name: 'field',
          type: 'double',
          optional: false,
        },
        {
          name: 'limit',
          type: 'integer',
          optional: false,
          constantOnly: true,
        },
        {
          name: 'order',
          type: 'keyword',
          optional: false,
          constantOnly: true,
          acceptedValues: ['asc', 'desc'],
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'field',
          type: 'integer',
          optional: false,
        },
        {
          name: 'limit',
          type: 'integer',
          optional: false,
          constantOnly: true,
        },
        {
          name: 'order',
          type: 'keyword',
          optional: false,
          constantOnly: true,
          acceptedValues: ['asc', 'desc'],
        },
      ],
      returnType: 'integer',
    },
    {
      params: [
        {
          name: 'field',
          type: 'ip',
          optional: false,
        },
        {
          name: 'limit',
          type: 'integer',
          optional: false,
          constantOnly: true,
        },
        {
          name: 'order',
          type: 'keyword',
          optional: false,
          constantOnly: true,
          acceptedValues: ['asc', 'desc'],
        },
      ],
      returnType: 'ip',
    },
    {
      params: [
        {
          name: 'field',
          type: 'keyword',
          optional: false,
        },
        {
          name: 'limit',
          type: 'integer',
          optional: false,
          constantOnly: true,
        },
        {
          name: 'order',
          type: 'keyword',
          optional: false,
          constantOnly: true,
          acceptedValues: ['asc', 'desc'],
        },
      ],
      returnType: 'keyword',
    },
    {
      params: [
        {
          name: 'field',
          type: 'long',
          optional: false,
        },
        {
          name: 'limit',
          type: 'integer',
          optional: false,
        },
        {
          name: 'order',
          type: 'keyword',
          optional: false,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'text',
          optional: false,
        },
        {
          name: 'limit',
          type: 'integer',
          optional: false,
        },
        {
          name: 'order',
          type: 'keyword',
          optional: false,
        },
      ],
      returnType: 'keyword',
    },
  ],
  supportedCommands: ['stats', 'inlinestats', 'metrics'],
  supportedOptions: undefined,
  validate: undefined,
  examples: [
    'FROM employees\n| STATS top_salaries = TOP(salary, 3, "desc"), top_salary = MAX(salary)',
  ],
};

// Do not edit this manually... generated by scripts/generate_function_definitions.ts
const valuesDefinition: FunctionDefinition = {
  type: 'agg',
  name: 'values',
  description: i18n.translate('kbn-esql-validation-autocomplete.esql.definitions.values', {
    defaultMessage:
      "Returns all values in a group as a multivalued field. The order of the returned values isn't guaranteed. If you need the values returned in order use esql-mv_sort.",
  }),
  preview: true,
  alias: undefined,
  signatures: [
    {
      params: [
        {
          name: 'field',
          type: 'boolean',
          optional: false,
        },
      ],
      returnType: 'boolean',
    },
    {
      params: [
        {
          name: 'field',
          type: 'date',
          optional: false,
        },
      ],
      returnType: 'date',
    },
    {
      params: [
        {
          name: 'field',
          type: 'date_nanos',
          optional: false,
        },
      ],
      returnType: 'date_nanos',
    },
    {
      params: [
        {
          name: 'field',
          type: 'double',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'field',
          type: 'integer',
          optional: false,
        },
      ],
      returnType: 'integer',
    },
    {
      params: [
        {
          name: 'field',
          type: 'ip',
          optional: false,
        },
      ],
      returnType: 'ip',
    },
    {
      params: [
        {
          name: 'field',
          type: 'keyword',
          optional: false,
        },
      ],
      returnType: 'keyword',
    },
    {
      params: [
        {
          name: 'field',
          type: 'long',
          optional: false,
        },
      ],
      returnType: 'long',
    },
    {
      params: [
        {
          name: 'field',
          type: 'text',
          optional: false,
        },
      ],
      returnType: 'keyword',
    },
    {
      params: [
        {
          name: 'field',
          type: 'version',
          optional: false,
        },
      ],
      returnType: 'version',
    },
  ],
  supportedCommands: ['stats', 'inlinestats', 'metrics'],
  supportedOptions: undefined,
  validate: undefined,
  examples: [
    '  FROM employees\n| EVAL first_letter = SUBSTRING(first_name, 0, 1)\n| STATS first_name=MV_SORT(VALUES(first_name)) BY first_letter\n| SORT first_letter',
  ],
};

// Do not edit this manually... generated by scripts/generate_function_definitions.ts
const weightedAvgDefinition: FunctionDefinition = {
  type: 'agg',
  name: 'weighted_avg',
  description: i18n.translate('kbn-esql-validation-autocomplete.esql.definitions.weighted_avg', {
    defaultMessage: 'The weighted average of a numeric expression.',
  }),
  preview: false,
  alias: undefined,
  signatures: [
    {
      params: [
        {
          name: 'number',
          type: 'double',
          optional: false,
        },
        {
          name: 'weight',
          type: 'double',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'double',
          optional: false,
        },
        {
          name: 'weight',
          type: 'integer',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'double',
          optional: false,
        },
        {
          name: 'weight',
          type: 'long',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'integer',
          optional: false,
        },
        {
          name: 'weight',
          type: 'double',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'integer',
          optional: false,
        },
        {
          name: 'weight',
          type: 'integer',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'integer',
          optional: false,
        },
        {
          name: 'weight',
          type: 'long',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'long',
          optional: false,
        },
        {
          name: 'weight',
          type: 'double',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'long',
          optional: false,
        },
        {
          name: 'weight',
          type: 'integer',
          optional: false,
        },
      ],
      returnType: 'double',
    },
    {
      params: [
        {
          name: 'number',
          type: 'long',
          optional: false,
        },
        {
          name: 'weight',
          type: 'long',
          optional: false,
        },
      ],
      returnType: 'double',
    },
  ],
  supportedCommands: ['stats', 'inlinestats', 'metrics'],
  supportedOptions: undefined,
  validate: undefined,
  examples: [
    'FROM employees\n| STATS w_avg = WEIGHTED_AVG(salary, height) by languages\n| EVAL w_avg = ROUND(w_avg)\n| KEEP w_avg, languages\n| SORT languages',
  ],
};
export const aggregationFunctionDefinitions = [
  avgDefinition,
  countDefinition,
  countDistinctDefinition,
  maxDefinition,
  medianDefinition,
  medianAbsoluteDeviationDefinition,
  minDefinition,
  percentileDefinition,
  stCentroidAggDefinition,
  sumDefinition,
  topDefinition,
  valuesDefinition,
  weightedAvgDefinition,
];
