typeof undefined === "undefined"; // true
typeof true === "boolean"; // true
typeof 42 === "number"; // true
typeof "42" === "string"; // true
typeof { life: 42 } === "object"; // true

// added in ES6!
typeof Symbol() === "symbol"; // true

typeof null === "object"; // true

function a() {}
typeof a === "function"; // true

typeof [1, 2, 3] === "object"; // true
