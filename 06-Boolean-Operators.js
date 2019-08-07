// NOT Operations

var o = {};
console.log("NOT " + o + "= ", !o);

var s1 = "";
console.log("NOT " + s1 + " = ", !s1);

var s2 = "Hello 🌏!";
console.log("NOT " + s2 + " = ", !s2);

var zero = 0;
console.log("NOT " + zero + " = ", !zero);

var n = 1;
console.log("NOT " + n + " = ", !n);

console.log("NOT null =", !null);

console.log("NOT NaN =", !NaN);

console.log("NOT undefined = ", !undefined);

console.log("NOT [] = ", ![]);

// AND Operations

console.log(o + " && '" + s1 + "' = '" + (o && s1) + "'");
console.log("'" + s1 + "' && " + o + " = '" + (s1 && o) + "'");
// console.log(zero + " && undeclaredVariable = " + (zero && undeclaredVariable));
// console.log(
//   "undeclaredVariable && " + zero + " = " + (undeclaredVariable && zero)
// );

// OR Operations

console.log(o + " || '" + s1 + "' = " + (o || s1));
console.log("'" + s1 + "' || " + o + " = " + (s1 || o));
// console.log(zero + " || undeclaredVariable = " + (zero || undeclaredVariable));
// console.log(
//   "undeclaredVariable || " + zero + " = " + (undeclaredVariable || zero)
// );
