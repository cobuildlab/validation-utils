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

