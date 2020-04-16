const chai = require('chai');
const lib = require('./code-smells.js');

const expect = chai.expect;

describe('code smells', () => {
    it('calls the original function', function () {
        var value = lib.codeSmellExample('a','b','c','d','e','f');
        expect(value).to.equal('abcde');
    }); 
    it('calls the original function', function () {
        var value = lib.codeSmellExample(null,null,null,null,null,'f');
        expect(value).to.equal('f');
    }); 
});