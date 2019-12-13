"use strict";

let calculator = new Calculator();

let ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    return this.step;
  }
};

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

function sumSalaries(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] !== "number") continue;
    sum += obj[key];
  }
  return sum;
}

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] !== "number") continue;
    obj[key] *= 2;
  }
}

function Calculator() {
  this.prop_x = 0;
  this.prop_y = 0;

  this.read = function(x, y) {
    this.prop_x = x;
    this.prop_y = y;
  };
  this.sum = function() {
    return this.prop_x + this.prop_y;
  };
  this.mul = function() {
    return this.prop_x * this.prop_y;
  };
}

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function(addition) {
    this.value += addition;
  };
}
