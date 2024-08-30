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
 *   title: KnowledgeBase API endpoints
 *   version: 1
 */

import { z } from '@kbn/zod';

/**
 * AI assistant KnowledgeBase.
 */
export type KnowledgeBaseResponse = z.infer<typeof KnowledgeBaseResponse>;
export const KnowledgeBaseResponse = z.object({
  /**
   * Identify the success of the method execution.
   */
  success: z.boolean().optional(),
});

export type CreateKnowledgeBaseRequestParams = z.infer<typeof CreateKnowledgeBaseRequestParams>;
export const CreateKnowledgeBaseRequestParams = z.object({
  /**
   * The KnowledgeBase `resource` value.
   */
  resource: z.string().optional(),
});
export type CreateKnowledgeBaseRequestParamsInput = z.input<
  typeof CreateKnowledgeBaseRequestParams
>;

export type CreateKnowledgeBaseResponse = z.infer<typeof CreateKnowledgeBaseResponse>;
export const CreateKnowledgeBaseResponse = KnowledgeBaseResponse;

export type DeleteKnowledgeBaseRequestParams = z.infer<typeof DeleteKnowledgeBaseRequestParams>;
export const DeleteKnowledgeBaseRequestParams = z.object({
  /**
   * The KnowledgeBase `resource` value.
   */
  resource: z.string().optional(),
});
export type DeleteKnowledgeBaseRequestParamsInput = z.input<
  typeof DeleteKnowledgeBaseRequestParams
>;

export type DeleteKnowledgeBaseResponse = z.infer<typeof DeleteKnowledgeBaseResponse>;
export const DeleteKnowledgeBaseResponse = KnowledgeBaseResponse;

export type ReadKnowledgeBaseRequestParams = z.infer<typeof ReadKnowledgeBaseRequestParams>;
export const ReadKnowledgeBaseRequestParams = z.object({
  /**
   * The KnowledgeBase `resource` value.
   */
  resource: z.string().optional(),
});
export type ReadKnowledgeBaseRequestParamsInput = z.input<typeof ReadKnowledgeBaseRequestParams>;

export type ReadKnowledgeBaseResponse = z.infer<typeof ReadKnowledgeBaseResponse>;
export const ReadKnowledgeBaseResponse = z.object({
  elser_exists: z.boolean().optional(),
  esql_exists: z.boolean().optional(),
  index_exists: z.boolean().optional(),
  is_setup_available: z.boolean().optional(),
  is_setup_in_progress: z.boolean().optional(),
  pipeline_exists: z.boolean().optional(),
});
