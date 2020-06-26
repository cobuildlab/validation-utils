import * as moment from 'moment';

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

/**
 * Validate if the provided string is a valid email address.
 *
 * @param {string} email - String to validate as email.
 * @returns {boolean} Wether an email is valid or not.
 */
export const isValidEmail = (email: string): boolean => {
  let emailExpression = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;

  return emailExpression.test(email) ? true : false;
};

/**
 * Validate if a string is a valid number.
 *
 * @param {string} stringToTest - The string to validate as a number.
 * @param {boolean} [allowZero=false] - If the string should accept 0 as a valid number.
 * @param {boolean} [allowNegative=false] - If the string should negative values.
 * 
 * @returns {boolean} If the string is valid number or not.
 */
export const isValidNumber = (stringToTest: string, allowZero: boolean = false, allowNegative: boolean = false): boolean => {
  const regExp = /^(-?[0-9]+)((\.|,)[0-9]+)?$/;
  
  if (!regExp.test(stringToTest))
    return false;

  const numberToTest = parseInt(stringToTest, 10);

  if (isNaN(numberToTest) || typeof numberToTest !== 'number') return false;

  if (numberToTest === 0 && allowZero === false) return false;

  if (numberToTest < 0 && allowNegative === false) return false;

  return true;
};

/**
 * Validate if a number is a valid integer.
 *
 * @param {number} numberToTest - The number to validate as integer.
 * @param {boolean} [allowZero=false] - If the number should accept 0 as a valid number.
 * @param {boolean} [allowNegative=false] - If the number should negative values.
 * 
 * @returns {boolean} If the number is a valid integer.
 */
export const isValidInteger = (numberToTest: number, allowZero: boolean = false, allowNegative: boolean = false): boolean => {
  if (!Number.isInteger(numberToTest)) return false;

  if (numberToTest === 0 && allowZero === false) return false;

  if (numberToTest < 0 && allowNegative === false) return false;

  return true;
};

/**
 * Validate if the provided string is a valid Date.
 *
 * @param {string} date - string date
 * @param {string} format - The format with wich the date is going to be processed
 * 
 * @returns {boolean} is valid date
 */
export const isValidDate = (date: string, format?: string): boolean => {
  if (!format)
    return moment(date).isValid();

  return moment(date, format, true).isValid();
};