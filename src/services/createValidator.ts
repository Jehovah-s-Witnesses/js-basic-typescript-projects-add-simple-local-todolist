import Ajv, { type JSONSchemaType, type ValidateFunction } from 'ajv';

const ajv = new Ajv({
  allErrors: true,
});

export const createValidator = <T>(
  schema: JSONSchemaType<T>,
): ValidateFunction<T> => {
  return ajv.compile<T>(schema);
};
