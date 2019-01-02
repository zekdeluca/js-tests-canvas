var {expect} = require('chai');
var {MyClass, MyMainClass} = require('../src/main.js');

const test_scenario_inputs = {
    "Basic item": [
        1,
        2,
        3
    ],
};

describe("This is my test suite", function() {
  it("Should have set all attributes to zero", function() {
    const main = new MyMainClass([ new MyClass(...test_scenario_inputs["Basic item"]) ]);
    const items = main.performMainAction();
    expect(items[0].attributeOne).to.equal(0);
    expect(items[0].attributeTwo).to.equal(0);
    expect(items[0].attributeThree).to.equal(0);
  });
});
