import {isNullOrUndefined, isValidString} from '../index';
/* global test, expect */

test('isNullOrUndefined:', () => {
  expect(isNullOrUndefined(null)).toBe(true);
  expect(isNullOrUndefined(undefined)).toBe(true);
  expect(isNullOrUndefined(true)).toBe(false);
  expect(isNullOrUndefined(false)).toBe(false);
  expect(isNullOrUndefined(1)).toBe(false);
  expect(isNullOrUndefined("")).toBe(false);
  expect(isNullOrUndefined([])).toBe(false);
  expect(isNullOrUndefined({})).toBe(false);
});


test('isValidString:', () => {
  expect(isValidString(null)).toBe(false);
  expect(isValidString(undefined)).toBe(false);
  expect(isValidString(true)).toBe(false);
  expect(isValidString(false)).toBe(false);
  expect(isValidString(1)).toBe(false);
  expect(isValidString("")).toBe(false);
  expect(isValidString([])).toBe(false);
  expect(isValidString({})).toBe(false);
  expect(isValidString("Some String", true, 5)).toBe(false);

  expect(isValidString("Some String")).toBe(true);
  expect(isValidString("", true)).toBe(true);


});
