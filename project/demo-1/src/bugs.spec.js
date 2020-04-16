const chai = require('chai');
const lib = require('./bugs.js');

const expect = chai.expect;

describe('bugs', () => {
    it("Should return the value it's passed", () => {
        var value = lib.incorrectReturn('a');
        expect(value).to.equal('a');
    });
});
