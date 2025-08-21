export const getAjvErrorKey = (instancePath: string): string => {
  return instancePath.replace('/', '');
};
