# Helpers Utilities

This project provides a collection of utility functions for working with strings in JavaScript. The functions are designed to be easy to use and provide a range of string manipulation capabilities.

## Functions

### convertToAmericanFormat

This function convert date brazilian from american

**Example:**

```javascript
const result = convertToAmericanFormat("28/02/1996")
console.log(result) // Output: "02/28/1996"
```

### capitalizeFirstLetter

This function capitalizes the first letter of a string and makes the rest of the string lowercase.

**Example:**

```javascript
const result = capitalizeFirstLetter("caio")
console.log(result) // Output: "Caio"
```

### getInitials

This function return initials to name

**Example:**

```javascript
const result = getInitials("Caio Almeia Silva")
console.log(result) // Output: "CS"
```

### truncateText

This function truncates a string to a specified maximum length and appends an ellipsis if the string exceeds the maximum length.

**Example:**

```javascript
const result = truncateText("This is a very long text.", 10)
console.log(result) // Output: "This is a ..."
```

### generateRandomInteger

This function generates a random integer within a specified range.

**Example:**

```javascript
const result = generateRandomInteger(1, 10)
console.log(result) // Output: a random integer between 1 and 10
```

## Testing

Each function has been thoroughly tested to ensure it works as expected. You can find the test cases in the `index.test.ts` files within each function's directory.
