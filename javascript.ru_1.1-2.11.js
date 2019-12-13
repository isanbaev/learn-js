function someFunc() {
  let admin;
  let name;
  name = "Джон";
  admin = name;
  alert(admin);
}
function nameOfJS() {
  let nameJS = prompt("What's the official name of JavaScript?", "");
  if (nameJS.toLowerCase() == "ecmascript") {
    alert("Right!");
  } else {
    alert('You don\'t know? "ECMAScript!"');
  }
}
function showTheSign() {
  let number = prompt("Enter the number:", "");
  if (number < 0) {
    alert(-1);
  } else if (number > 0) {
    alert(1);
  } else if (number == 0) {
    alert(0);
  } else {
    alert("Not a number!");
  }
}
function checkLogin() {
  let login = prompt("Enter login:", "");
  if (login == "admin") {
    let password = prompt("Enter password:", "");
    if (password == "I'm the boss") {
      alert("Hello!");
    } else if (password == null || password == "") {
      alert("Canceled");
    } else {
      alert("Wrong password");
    }
  } else if (login == null || login == "") {
    alert("Canceled");
  } else {
    alert("I don't know you!");
  }
}
function sumOfNum() {
  let sum = 0;

  while (true) {
    let value = +prompt("Введите число", "");

    if (!value) break; // (*)

    sum += value;
  }
  alert("Сумма: " + sum);
}
function authorization() {
  let login = prompt("Enter login:", "");
  let message =
    login == "employee"
      ? "Hey!"
      : login == "director"
      ? "Hello!"
      : login == ""
      ? "No login"
      : "Fuck u!";
  let logic = (3 > 4 && 4 < 3) || (5 < 4 && 6 < 7);
  alert(message);
}
function findCoordinate() {
  outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let input = prompt(`Coordinates: ${i}, ${j}`, "");
      if (!input) break outer;
    }
  }
  alert("Ready!");
}
// {
//   let a = 2,
//     b = 3;
//   let result = a + b < 4 ? "Few" : "A lot of";
//   //console.log(result);
// }
// {
//   let age = 9;
//   if (age >= 14 && age <= 90) {
//     console.log(age);
//   }
//   if (!(age >= 14 && age <= 90)) {
//     console.log(age);
//   }
//   if (age < 14 && age > 90) {
//     console.log(age);
//   }
// }
