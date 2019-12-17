function sumOfTwoNum() {
  let a = +prompt("Enter the first number:", "");
  let b = +prompt("Enter the second number:", "");
  alert(a + b);
}

function readNumber() {
  let num = prompt("Enter the number:", "");
  if (num == null || num == "") return null;
  else if (isNaN(+num)) num = readNumber();
  return +num;
}

// function readNumber() {
//   let num;
//   do {
//     num = prompt("Введите число", 0);
//   } while (!isFinite(num));
//   if (num === null || num === "") return null;
//   return +num;
// }

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  let rand = Math.random() * (max + 1 - min) + min;
  return Math.floor(rand);
}

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function checkSpam(str) {
  if (str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx"))
    return true;
  return false;
}

// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

function truncate(str, max_length) {
  if (str.length > max_length) {
    return str.slice(0, max_length - 1) + "…";
  }

  return str;
}

// function truncate(str, maxlength) {
//   return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
// }

function extractCurrencyValue(str) {
  return +str.slice(1);
}

{
  let styles = ["Jazz", "Blues"];
  // console.log(styles);
  styles.push("Rock'n'roll");
  // console.log(styles);
  styles[Math.floor((styles.length - 1) / 2)] = "Classic";
  // console.log(styles);
  styles.shift();
  // console.log(styles);
  styles.unshift("Rap", "Reggae");
  // console.log(styles);
}

function sumInput() {
  let i = 0;
  let sum = 0;
  let arr = [];

  while (true) {
    arr[i] = prompt("Enter the number", "0");
    if (arr[i] === "" || arr[i] === null || !isFinite(arr[i])) return sum;
    sum += +arr[i];
    i++;
  }
}

// function sumInput() {
//   let numbers = [];
//   while (true) {
//     let value = prompt("Введите число", 0);

//     // Прекращаем ввод?
//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

function getMaxSubSum(arr) {
  let max_sum = 0;
  let part_sum = 0;

  for (let item of arr) {
    part_sum += item;
    max_sum = max_sum > part_sum ? max_sum : part_sum;
    if (part_sum < 0) part_sum = 0;
  }

  return max_sum;
}

// function getMaxSubSum(arr) {
//   let maxSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let sumFixedStart = 0;
//     for (let j = i; j < arr.length; j++) {
//       sumFixedStart += arr[j];
//       maxSum = Math.max(maxSum, sumFixedStart);
//     }
//   }

//   return maxSum;
// }

function camelize(str) {
  let arr_word = str.split("-");
  let arr_camel = arr_word.map(function(item, index) {
    if (index == 0) return item;
    else return item[0].toUpperCase() + item.slice(1);
  });

  return arr_camel.join("");
}

// function camelize(str) {
//   return str
//     .split("-")
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// }

function filterRange(arr, a, b) {
  let filtered_arr = [];
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      filtered_arr[j] = arr[i];
      j++;
    }
  }

  return filtered_arr;
}

// function filterRange(arr, a, b) {
//   return arr.filter(item => a <= item && item <= b);
// }

function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
}

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

function sortDescending(arr) {
  // or just simple {array.sort((a, b) => b - a);}
  arr.sort(compareNum);

  function compareNum(a, b) {
    if (b > a) return 1;
    if (b == a) return 0;
    if (b < a) return -1;
  }
}

function copySorted(arr) {
  let sorted_arr = arr.slice();

  sorted_arr.sort();

  return sorted_arr;
}

// function copySorted(arr) {
//   return arr.slice().sort();
// }

function CalculatorExpandable() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };

  this.calculate = function(str) {
    let arr_split = str.split(" ");
    let a = +arr_split[0],
      operator = arr_split[1],
      b = +arr_split[2];

    if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[operator](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let users_mapped = users.map(function(obj) {
  let obj_mapped = {};

  obj_mapped.fullname = obj.name + " " + obj.surname;
  obj_mapped.id = obj.id;

  return obj_mapped;
});

// let usersMapped = users.map(user => ({      // same as users_mapped
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

// console.log(users_mapped[0].id);
// console.log(users_mapped[0].fullname);

function sortByAge2(users) {
  users.sort(function(a, b) {
    if (a.age > b.age) return 1;
    if (a.age == b.age) return 0;
    if (a.age < b.age) return -1;
  });
}

// function sortByAge(arr) {
//   arr.sort((a, b) => (a.age > b.age ? 1 : -1));
// }
