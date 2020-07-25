import * as moment from 'moment';

export * from './error';

/**
 * Validate if a value is `null` or `undefined`.
 *
 * @param value - The Value to test.
 * @returns If a value is `null` or `undefined`.
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
 * @param value - The value to validate.
 * @param allowEmpty - [allowEmpty=false] If a empty string should be valid
 * or not.
 * @param size - [size=undefined] The maximum size of the string.
 * @returns If the string is valid or not.
 */
export const isValidString = (
  value?: any,
  allowEmpty = false,
  size?: number,
): boolean => {
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
 * @param email - String to validate as email.
 * @returns Wether an email is valid or not.
 */
export const isValidEmail = (email: string): boolean => {
  const emailExpression = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;

  return emailExpression.test(email) ? true : false;
};

/**
 * Validate if a string is a valid number.
 *
 * @param stringToTest - The string to validate as a number.
 * @param allowZero - [allowZero=false] If the string should accept 0 as a valid number.
 * @param allowNegative - [allowNegative=false] If the string should negative values.
 *
 * @returns If the string is valid number or not.
 */
export const isValidNumber = (
  stringToTest: string,
  allowZero = false,
  allowNegative = false,
): boolean => {
  const regExp = /^(-?[0-9]+)((\.|,)[0-9]+)?$/;

  if (!regExp.test(stringToTest)) return false;

  const numberToTest = parseInt(stringToTest, 10);

  if (isNaN(numberToTest) || typeof numberToTest !== 'number') return false;

  if (numberToTest === 0 && allowZero === false) return false;

  if (numberToTest < 0 && allowNegative === false) return false;

  return true;
};

/**
 * Validate if a number is a valid integer.
 *
 * @param numberToTest - The number to validate as integer.
 * @param allowZero - [allowZero=false] If the number should accept 0 as a valid number.
 * @param allowNegative - [allowNegative=false] If the number should negative values.
 *
 * @returns If the number is a valid integer.
 */
export const isValidInteger = (
  numberToTest: number,
  allowZero = false,
  allowNegative = false,
): boolean => {
  if (!Number.isInteger(numberToTest)) return false;

  if (numberToTest === 0 && allowZero === false) return false;

  if (numberToTest < 0 && allowNegative === false) return false;

  return true;
};

/**
 * Validate if the provided string is a valid Date.
 *
 * @param date - String date.
 * @param format - The format with wich the date is going to be
 * processed.
 *
 * @returns Is valid date.
 */
export const isValidDate = (date: string, format?: string): boolean => {
  if (!format) return moment(date).isValid();

  return moment(date, format, true).isValid();
};

type FileValue = {
  id?: string;
  fileId: string;
  filename: string;
  mimetype?: string;
  download_Url?: string;
};

/**
 * Validate if a file has a valid type/extension based on a array of valid
 * types.
 *
 * @param file - The file to validate.
 * @param validTypes - Array of valid types.
 * @returns If the file is valid or not.
 */
export const isValidFileType = (
  file: FileValue,
  validTypes: string[],
): boolean => {
  const { mimetype, filename } = file;

  const fileType = mimetype
    ? mimetype.split('/')[mimetype.split('/').length - 1].toLowerCase()
    : filename.split('.')[filename.split('.').length - 1].toLowerCase();

  if (validTypes.includes(fileType)) {
    return true;
  }

  return false;
};
