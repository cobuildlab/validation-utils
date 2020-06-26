# Validation utils

This is a package for functions that are use full in common cases for validations.


## Index

| Function   | Description   | 
| ------ | ------ | 
| [`isNullOrUndefined`](#isNullOrUndefined) | Validate if a value is `null` or `undefined`. | 
| [`isValidString`](#isValidString) | Validate if a value is a valid string or not. | 


### `isNullOrUndefined(value)`

- Returns true for `null` and `undefined` values.

Example:


```javascript
console.log(isNullOrUndefined(null));
// true
console.log(isNullOrUndefined(undefined));
// true
console.log(isNullOrUndefined(true));
// false
``` 




### `isValidString(value)`

- Validate if a value is a valid string or not.
- Optional validates empty strings
- Optional validates size fo the string

Example:


```javascript
console.log(isValidString(null));
// false
console.log(isValidString(undefined));
// false
console.log(isValidString(true));
// false
console.log(isValidString(""));
// false
console.log(isValidString("", true));
// true
console.log(isValidString("123456", true, 5));
// false
console.log(isValidString("123456"));
// true
``` 




### `isValidEmail(value)`

- Validates if the value has an email pattern

Example


```javascript
console.log(isValidEmail('')); // false
console.log(isValidEmail('Some string')); // false
console.log(isValidEmail('jhondoe@com')); // false
console.log(isValidEmail('@gmail.com')); // false
console.log(isValidEmail('jhondoe@gmail.com')); // true
```




### `isValidNumber(value, allowZero, allowNegative)`

- Validates if a value of type string is a valid number
- If allowZero equals true, '0' would return true
- If allowNegative equals true, negative values would return true

```javascript
console.log(isValidNumber('')); // false
console.log(isValidNumber('Some string')); // false
console.log(isValidNumber('123a424')); // false
console.log(isValidNumber('123a424', true)); // false
console.log(isValidNumber('123a424', true, true)); // false
console.log(isValidNumber('123a424', false, true)); // false
console.log(isValidNumber('1.23a424', false, true)); // false
console.log(isValidNumber('123-424', false, true)); // false
console.log(isValidNumber('0')); // false  
console.log(isValidNumber('0', true)); // true
console.log(isValidNumber('-1', true, true)); // true
console.log(isValidNumber('201')); // true
console.log(isValidNumber('3.14159')); // true
```




### `isValidInteger(value, allowZero, allowNegative)`

- Validates if a value of type number is an integer
- If allowZero equals true, 0 would return true
- If allowNegative equals true, negative values would return true

```javascript
console.log(isValidInteger(3.14159)); // false
console.log(isValidInteger(0)); // false
console.log(isValidInteger(-1)); // false
console.log(isValidInteger(0, true)); // true 
console.log(isValidInteger(-1, false, true)); // true
console.log(isValidInteger(10)); // true
```




### `isValidDate(value, format)`

- Validates if a value is a valid date string
- If the format is passed, then the value should match the pattern

```javascript
console.log(isValidDate('')); // false
console.log(isValidDate('Some string')); // false
console.log(isValidDate('04939-343.643')); // false
console.log(isValidDate('2020-06-26', 'YYYY-MM-DD')); // true
console.log(isValidDate('2020-12-31', 'YYYY-MM-DD')); // true
console.log(isValidDate('Mar 25 2015', 'MMM DD YYYY')); // true
console.log(isValidDate('Tue Mar 24 2015 19:30:00', 'ddd MMM DD YYY HH:mm:ss')); // true
```