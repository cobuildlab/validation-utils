/**
 * Validate if a value is `null` or `undefined`.
 *
 * @param {null|undefined|any} value - The Value to test.
 * @returns {boolean} If a value is `null` or `undefined`.
 */
export const isNullOrUndefined = (value?: any): boolean => {
  if (value === null) {
    return true;
  }
  if (value === undefined) {
    return true;
  }
  return false;
};
/**
 * Validate if a value is a valid string or not.
 *
 * @param {string} value - The value to validate.
 * @param {boolean} [allowEmpty=false] - If a empty string should be valid or not.
 * @param {number?} [size=undefined] - The maximum size of the string.
 * @returns {boolean} If the string is valid or not.
 */
export const isValidString = (value?: any, allowEmpty = false, size?: number): boolean => {
  if (isNullOrUndefined(value)) {
    return false;
  }
  if (typeof value !== 'string') {
    return false;
  }

  if (value.length === 0 && allowEmpty === false) return false;

  if (size) {
    if (value.length > size) {
      return false;
    }
  }

  return true;
};
