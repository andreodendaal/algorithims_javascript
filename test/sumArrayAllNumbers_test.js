var assert = require('assert');
var myFunction = require('../src/sumArrayAllNumbers.js');

describe('myFunction', () => {
    it('test1', () => {
        const result = myFunction([1, 4]);
        assert.deepStrictEqual(result, 10)        
        
    });
    it('test2', () => {
        const result = myFunction([5, 10]);
        assert.deepStrictEqual(result, 45)        
        
    });

    it('sort parameter array', () => {
        const result = myFunction([4, 1]);
        assert.deepStrictEqual(result, 10)        
        
    });
    
});