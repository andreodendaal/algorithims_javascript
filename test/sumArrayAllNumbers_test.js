var assert = require('assert');
var myFunction = require('../src/sumArrayAllNumbers.js');

describe('myFunction', () => {
    it('test', () => {

        const result = myFunction([1, 4]);
        assert.deepStrictEqual(result, 10)        
        
    });

    it('sort parameter array', () => {

        const result = myFunction([4, 1]);
        assert.deepStrictEqual(result, 10)        
        
    });
    
});