function numberOver100() {
  let num;
  // while (true) {
  //   num = +prompt("Enter number over 100:", 0);
  //   if (num > 100) break;
  // }
  do {
    num = +prompt("Enter number over 100:", 0);
  } while (num <= 100 && num);
}
function simpleNumbers() {
  let n = +prompt("Enter the number:", "");
  let numbers = "";
  nextNum: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextNum;
    }
    numbers += `${i}, `;
  }
  alert(numbers);
}
function whichNum() {
  let number = +prompt("Enter the number", "");
  switch (number) {
    case 0:
    case 1:
      alert("Zero or one");
      break;
    case 2:
      alert("Two");
      break;
    case 3:
      alert("Three");
      break;
    default:
      alert("Undefined value");
  }
}
// {
//   const number = +prompt("Enter the number between 0 and 3", "");
//   switch (number) {
//     case 0:
//       console.log("You entered 0");
//       break;
//     case 1:
//       console.log("You entered 1");
//       break;
//     case 2:
//     case 3:
//       console.log("You entered 2 or 3");
//       break;
//   }
// }
// {
//   if (browser == "Edge") alert("You've got the Edge!");
//   else if (
//     browser == "Chrome" ||
//     browser == "Firefox" ||
//     browser == "Safari" ||
//     browser == "Opera"
//   )
//     alert("Okay we support these browsers too");
//   else alert("We hope that this page looks ok!");
// }
// {
//   for (let i = 2; i < 10; i += 2) {
//     //console.log(i);
//   }
//   for (let i = 0; i < 3; i++) {
//     console.log(`number ${i}!`);
//   }
//   let i = 0;
//   while (i < 3) {
//     console.log(`number ${i}!`);
//     i++;
//   }
// }
