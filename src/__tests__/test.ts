import {
  isNullOrUndefined, 
  isValidString,
  isValidEmail,
  isValidNumber,
  isValidInteger,
  isValidDate
} from '../index';

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

test('isValidEmail', () => {
  expect(isValidEmail('')).toBe(false);
  expect(isValidEmail('Some string')).toBe(false);
  expect(isValidEmail('jhondoe@com')).toBe(false);
  expect(isValidEmail('@gmail.com')).toBe(false);

  expect(isValidEmail('jhondoe@gmail.com')).toBe(true);
});

test('isValidNumber', () => {
  expect(isValidNumber('')).toBe(false);
  expect(isValidNumber('Some string')).toBe(false);
  expect(isValidNumber('123a424')).toBe(false);
  expect(isValidNumber('123a424', true)).toBe(false);
  expect(isValidNumber('123a424', true, true)).toBe(false);
  expect(isValidNumber('123a424', false, true)).toBe(false);
  expect(isValidNumber('1.23a424', false, true)).toBe(false);
  expect(isValidNumber('123-424', false, true)).toBe(false);
  expect(isValidNumber('0')).toBe(false);
  
  expect(isValidNumber('0', true)).toBe(true);
  expect(isValidNumber('-1', true, true)).toBe(true);
  expect(isValidNumber('201')).toBe(true);
  expect(isValidNumber('3.14159')).toBe(true);
});

test('isValidInteger', () => {
  expect(isValidInteger(3.14159)).toBe(false);
  expect(isValidInteger(0)).toBe(false);
  expect(isValidInteger(-1)).toBe(false);
  
  expect(isValidInteger(0, true)).toBe(true);
  expect(isValidInteger(-1, false, true)).toBe(true);
  expect(isValidInteger(10)).toBe(true);
});

test('isValidDate', () => {
  expect(isValidDate('')).toBe(false);
  expect(isValidDate('Some string')).toBe(false);
  expect(isValidDate('04939-343.643')).toBe(false);
  expect(isValidDate('2020-12-31', 'ddd MMM DD YYY HH:mm:ss')).toBe(false);
  
  expect(isValidDate('2020-06-26', 'YYYY-MM-DD')).toBe(true);
  expect(isValidDate('Mar 25 2015', 'MMM DD YYYY')).toBe(true);
  expect(isValidDate('Tue Mar 24 2015 19:30:00', 'ddd MMM DD YYY HH:mm:ss')).toBe(true);
})