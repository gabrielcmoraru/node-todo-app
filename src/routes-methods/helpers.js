const validateUserData = (data, isRequired) => {
  const { text, done } = data;

  let errorHandler = {
    isValid: true,
    errors: [],
  };

  if (done === undefined && text === undefined && isRequired) {
    if (Object.keys(data).length > 0)
      errorHandler.errors.push('Invalid data shape');

    errorHandler.errors.push('`text` or `done` value is required');

    errorHandler.isValid = false;
  }

  if (text === undefined && !isRequired) {
    errorHandler.errors.push('`text` is required');
    errorHandler.isValid = false;
  }

  if (typeof text !== 'string' && !isRequired) {
    errorHandler.errors.push('`text` type should be string');
    errorHandler.isValid = false;
  }

  if (typeof done !== 'boolean' && done) {
    errorHandler.errors.push('`done` type should be boolean');
    errorHandler.isValid = false;
  }

  return errorHandler;
};

export { validateUserData };
