/**
 * Created by Family on 1/29/2018.
 */

var assert = require("assert");
var andre = require('../src/andre.js');

describe('andre', function () {
    it('repo test function', function () {
        const result = andre("hello");
        assert.deepStrictEqual(result, "olleh", 'andre("hello") is "olleh"')
    });
});

