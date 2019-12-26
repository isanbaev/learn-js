function checkAge(age) {
  return age > 18 ? true : confirm("Parental permission?");
}

// function checkAge(age) {
//   return age > 18 || confirm("Родители разрешили?");
// }

function min(a, b) {
  return a < b ? a : b;
}

function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

// ask(
//   "Did you agree?",
//   () => alert("You are agree."),
//   () => alert("Operation canceled.")
// );
// let x = +prompt("Enter number:", "");
// let n = +prompt("Enter degree of:", "");
// alert(pow(x, n));
// console.log(checkAge(19));
// console.log(min(1, 1));
// console.log(pow(3, 3));
