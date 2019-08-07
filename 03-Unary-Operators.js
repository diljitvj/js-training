var s1 = "2";
var s2 = "a";
var b1 = false;
var b2 = true;
var f = 1.1;
var o1 = {};
var o2 = {
  valueOf: function() {
    return 1;
  }
};

s1++;
console.log(s1);
s2++;
console.log(s2);
b1++;
console.log(b1);
b2++;
console.log(b2);
f++;
console.log(f);
o1++;
console.log(o1);
o2++;
console.log(o2);
