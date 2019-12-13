describe("pow", function() {
  describe("возводит x в степень 3", function() {
    function testPowFunc(x) {
      let expected = x * x * x;
      it(`${x} в степени 3 будет ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let i = 0; i <= 5; i++) {
      testPowFunc(i);
    }
  });

  it("Для отрицательных n возвращает NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("Для дробных n возвращает NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });
});

describe("isEmpty", function() {
  it("Return true, if object is empty", function() {
    assert.isTrue(isEmpty({}));
  });
  it("Return false, if object is not empty", function() {
    assert.isFalse(isEmpty({ property: false }));
  });
});

let test_obj = {
  John: 100,
  Ann: 160,
  Pete: 130,
  Dora: "one thousant",
  nothing: undefined
};

describe("sumSalaries", function() {
  let expected = test_obj.John + test_obj.Ann + test_obj.Pete;

  it(`Sum of object properties ${test_obj.John}, ${test_obj.Ann}, ${test_obj.Pete} equal ${expected}`, function() {
    assert.equal(sumSalaries(test_obj), expected);
  });
  it(`If object is empty, return 0`, function() {
    assert.equal(sumSalaries({}), 0);
  });
});

describe("multiplyNumeric", function() {
  let clone_test_obj = Object.assign({}, test_obj);
  multiplyNumeric(clone_test_obj);

  for (let key in clone_test_obj) {
    if (typeof clone_test_obj[key] !== "number") {
      it(`This property is NaN, 
      it is ${typeof clone_test_obj[key]}. It stay same`, function() {
        assert.equal(clone_test_obj[key], test_obj[key]);
      });
      continue;
    }

    it(`Object property ${clone_test_obj[key]} equals ${test_obj[key]} * 2`, function() {
      assert.equal(clone_test_obj[key], test_obj[key] * 2);
    });
  }

  it("returns nothing", function() {
    assert.isUndefined(multiplyNumeric({}));
  });
});

describe("Object calculator", function() {
  let a = 4,
    b = 6;

  describe("calculator.read", function() {
    context("Save a, b in object properties prop_x, prop_y", function() {
      calculator.read(a, b);

      it(`prop_x equals ${a}`, function() {
        assert.equal(calculator.prop_x, a);
      });
      it(`prop_x equals ${b}`, function() {
        assert.equal(calculator.prop_y, b);
      });
    });
  });

  describe("calculator.sum", function() {
    let sum = a + b;

    it(`${a} plus ${b} equals ${sum}`, function() {
      assert.equal(calculator.sum(), sum);
    });
  });

  describe("calculator.mul", function() {
    let mult = a * b;

    it(`${a} multiply ${b} equals ${mult}`, function() {
      assert.equal(calculator.mul(), mult);
    });
  });
});

describe("Object ladder", function() {
  beforeEach(function() {
    ladder.step = 0;
  });

  it("up() increase step", function() {
    assert.equal(ladder.up().up().step, 2);
  });

  it("down() decrease step", function() {
    assert.equal(ladder.down().step, -1);
  });

  it(`up().up().down().step = 0`, function() {
    assert.equal(ladder.up().down().step, 0);
  });

  it(`up() repeat 2 times; ladder.showStep() = 1`, function() {
    ladder.up();
    ladder.up();

    assert.equal(ladder.showStep(), 2);
  });

  after(function() {
    ladder.step = 0;
  });
});

describe("Accumulator", function() {
  it("initial value is the argument of the constructor", function() {
    let accumulator = new Accumulator(1);

    assert.equal(accumulator.value, 1);
  });

  it("after reading 0, the value is 1", function() {
    let accumulator = new Accumulator(1);
    accumulator.read(0);
    assert.equal(accumulator.value, 1);
  });

  it("after reading -7, the value is -6", function() {
    let accumulator = new Accumulator(1);
    accumulator.read(-7);
    assert.equal(accumulator.value, -6);
  });
});

describe("readNumber", function() {
  beforeEach(function() {
    sinon.stub(window, "prompt");
  });

  afterEach(function() {
    prompt.restore();
  });

  it("If entered a number, return it", function() {
    prompt.returns("23");
    assert.strictEqual(readNumber(), 23);
  });

  it("If entered 0, return it", function() {
    prompt.returns("0");
    assert.strictEqual(readNumber(), 0);
  });

  it("Continues the loop until meets a number", function() {
    prompt.onCall(0).returns("not a number");
    prompt.onCall(1).returns("not a number 2");
    prompt.onCall(2).returns("23");
    assert.strictEqual(readNumber(), 23);
  });

  it("If cancel, return null", function() {
    prompt.returns(null);
    assert.isNull(readNumber());
  });

  it("If entered an empty line, returns null", function() {
    prompt.returns("");
    assert.isNull(readNumber());
  });
});

describe("ucFirst", function() {
  it(`If string "john", returns "John"`, function() {
    assert.strictEqual(ucFirst("john"), "John");
  });

  it(`If string "", returns it`, function() {
    assert.strictEqual(ucFirst(""), "");
  });
});

describe("checkSpam", function() {
  it(`If string contains "viagra", returns true`, function() {
    assert.isTrue(checkSpam("buy ViAgRA now"));
  });

  it(`If string contains "xxx", returns true`, function() {
    assert.isTrue(checkSpam("free xxxxx"));
  });

  it(`If string does not contain "viagra" or "xxx", returns false`, function() {
    assert.isFalse(checkSpam("innocent rabbit"));
  });
});

describe("truncate", function() {
  it(`If "John Doe" shorter than 10, returns it`, function() {
    assert.strictEqual(truncate("John Doe", 10), "John Doe");
  });

  it(`If "John Doe walk around" longer than 10, returns "John Doe …"`, function() {
    assert.strictEqual(truncate("John Doe walk around", 10), "John Doe …");
  });
});

describe("extractCurrencyValue", function() {
  it(`Returns value 120 from "$120"`, function() {
    assert.strictEqual(extractCurrencyValue("$120"), 120);
  });
});

describe("sumInput", function() {
  beforeEach(function() {
    sinon.stub(window, "prompt");
  });

  afterEach(function() {
    prompt.restore();
  });

  it("Returns the sum of numbers", function() {
    prompt.onCall(0).returns("0");
    prompt.onCall(1).returns("-7");
    prompt.onCall(2).returns("10");
    prompt.onCall(3).returns("17");
    prompt.onCall(4).returns("");
    assert.strictEqual(sumInput(), 20);
  });
});

describe("getMaxSubSum", function() {
  it("Maximal subsum of [-1, 2, 3, -3] equals 5", function() {
    assert.equal(getMaxSubSum([-1, 2, 3, -9]), 5);
  });
  it("Maximal subsum of [1, 2, 3] equals 6", function() {
    assert.equal(getMaxSubSum([1, 2, 3]), 6);
  });
  it("Maximal subsum of [100, -9, 2, -3, 5] equals 100", function() {
    assert.equal(getMaxSubSum([100, -9, 2, -3, 5]), 100);
  });
  it("Maximal subsum of [-1, -2] equals 0", function() {
    assert.equal(getMaxSubSum([-1, -2]), 0);
  });
  it("Maximal subsum of [2, -8, 5, -1, 2, -3, 2] equals 6", function() {
    assert.equal(getMaxSubSum([2, -8, 5, -1, 2, -3, 2]), 6);
  });
  it("Maximal subsum of [] equals 0", function() {
    assert.equal(getMaxSubSum([]), 0);
  });
});

describe("camelize", function() {
  it("Leaves an empty line as is", function() {
    assert.equal(camelize(""), "");
  });

  it("Turns background-color into backgroundColor", function() {
    assert.equal(camelize("background-color"), "backgroundColor");
  });

  it("Turns -webkit-transition into WebkitTransition", function() {
    assert.equal(camelize("-webkit-transition"), "WebkitTransition");
  });
});

describe("filterRange", function() {
  it("Leave an array as is", function() {
    let test_arr = [5, 3, 8, 1, 0];

    filterRange(test_arr, 1, 4);

    assert.deepEqual(test_arr, [5, 3, 8, 1, 0]);
  });

  it("Returns the filtered values", function() {
    let test_arr = [5, 3, 8, 1, 0];

    assert.deepEqual(filterRange(test_arr, 0, 4), [3, 1, 0]);
  });
});

describe("filterRangeInPlace", function() {
  it("Filter an array", function() {
    let test_arr = [5, 3, 8, 1, 0];

    filterRangeInPlace(test_arr, 1, 4);

    assert.deepEqual(test_arr, [3, 1]);
  });

  it("doesn't return anything", function() {
    assert.isUndefined(filterRangeInPlace([1, 2, 3], 1, 4));
  });
});

describe("sortDescending", function() {
  it("Sort Descending an array", function() {
    let test_arr = [5, 2, 1, -10, 8];

    sortDescending(test_arr);

    assert.deepEqual(test_arr, [8, 5, 2, 1, -10]);
  });

  it("doesn't return anything", function() {
    assert.isUndefined(sortDescending([1, 2, 3]));
  });
});

describe("copySorted", function() {
  it("Return sorted array", function() {
    assert.deepEqual(copySorted(["HTML", "JavaScript", "CSS"]), ["CSS", "HTML", "JavaScript"]);
  });

  it("Leave an array as is", function() {
    let test_arr = ["HTML", "JavaScript", "CSS"];
    copySorted(test_arr);
    assert.deepEqual(test_arr, ["HTML", "JavaScript", "CSS"]);
  });
});

describe("Calculator2", function() {
  let test_calculator;

  beforeEach(function() {
    test_calculator = new Calculator2;
  });

  it("calculate(12 + 34) = 46", function() {
    assert.equal(test_calculator.calculate("12 + 34"), 46);
  });

  it("calculate(34 - 12) = 22", function() {
    assert.equal(test_calculator.calculate("34 - 12"), 22);
  });

  it("add multiplication: calculate(2 * 3) = 6", function() {
    calculator.addMethod("*", (a, b) => a * b);
    assert.equal(test_calculator.calculate("2 * 3"), 6);
  });

  it("add division: calculate(6 / 3) = 2", function() {
    calculator.addMethod("/", (a, b) => a / b);
    assert.equal(test_calculator.calculate("6 / 3"), 2);
  });

  it("add power: calculate(2 ** 3) = 8", function() {
    calculator.addMethod("**", (a, b) => a ** b);
    assert.equal(test_calculator.calculate("2 ** 3"), 8);
  });
});