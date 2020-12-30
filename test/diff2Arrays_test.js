var assert = require('assert');
var myFunction = require('../src/diff2Arrays.js');

describe('diff2Arrays', () => {
    it('test1', () => {
        const result = myFunction([1, 2, 3, 5], [1, 2, 3, 4, 5]);
        assert.deepStrictEqual(result, [4])        
        
    });
    it('test2', () => {
        const result = myFunction(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
        assert.deepStrictEqual(result, ["pink wool"])        
        
    });

    it('sort parameter array', () => {
        const result = myFunction(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
        assert.notDeepStrictEqual(result, ["diorite", "pink wool"])        
        
    });
    
});