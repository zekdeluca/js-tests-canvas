class MyMainClass {
    constructor(items = []) {
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

export { MyMainClass };
