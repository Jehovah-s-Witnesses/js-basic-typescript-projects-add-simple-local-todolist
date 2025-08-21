import type { JSONSchemaType } from 'ajv';
import type { TodoPayload } from '../../Types/todo.ts';

export const todoCreateFormSchema: JSONSchemaType<TodoPayload> = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      minLength: 6,
      maxLength: 30,
    },
    description: {
      type: 'string',
      minLength: 10,
      maxLength: 300,
    },
  },
  required: ['title', 'description'],
};
