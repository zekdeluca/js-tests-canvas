import { expect } from 'chai';

const test_scenario_inputs = {
    'Basic item': {
        input: '1',
        output: '1',
    },
};

describe('This is my test suite', function() {
    it('Should behave as expected', function() {
        expect(test_scenario_inputs['Basic item'].input).to.equal(test_scenario_inputs['Basic item'].output);
    });
});
