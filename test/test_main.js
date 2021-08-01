import { expect, assert } from 'chai';

const testScenarioInputs = {
    Base: {
        input: [0, 1],
        output: [0, 1],
    },
};

describe('#Tests', function() {
    it('Should behave as expected', function() {
        expect(testScenarioInputs['Base'].output).to.not.be.undefined;
        assert.deepEqual(testScenarioInputs['Base'].input, testScenarioInputs['Base'].output);
    });
});
