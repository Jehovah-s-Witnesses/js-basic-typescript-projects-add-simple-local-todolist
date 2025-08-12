import Ajv from 'ajv';

const ajv = new Ajv({
  allErrors: true,
});

export const createValidator = (schema) => {
  return ajv.compile(schema);
};
