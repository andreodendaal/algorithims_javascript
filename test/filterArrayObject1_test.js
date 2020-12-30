var assert = require('assert');
var whatIsInAName = require('../src/filterArrayObject1.js');

describe('whatIsInAName', () => {
    it('first test', () => {
        const result = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
        assert.deepStrictEqual(result, [{ first: "Tybalt", last: "Capulet" }])        
    });

});