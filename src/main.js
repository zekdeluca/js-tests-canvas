class MyClass {
  constructor(attributeOne, attributeTwo, attributeThree) {
    this.attributeOne = attributeOne;
    this.attributeTwo = attributeTwo;
    this.attributeThree = attributeThree;
  }

  setToZero() {
    this.attributeOne = 0, this.attributeTwo = 0, this.attributeThree = 0;
  }
}

class MyMainClass {
  constructor(items=[]){
    this.items = items;
  }

  performMainAction() {
    // Perform main action and return items
    this.items.map((item) => {
      return item.setToZero();
    });

    return this.items;
  }
}

module.exports = {
  MyClass,
  MyMainClass
}
