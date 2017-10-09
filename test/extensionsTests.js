var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');
var String = require("../src/Extensions.js").String
var Array = require("../src/Extensions.js").Array

var Interpreter = require('../src/interpreter');


describe("Extensions", function () {

    before(function () {
        // runs before all tests in this block
    });

    after(function () {
        // runs after all tests in this block
    });

    beforeEach(function () {
        // runs before each test in this block
        
    });

    afterEach(function () {
        // runs after each test in this block
    });

    describe('String extensions', function () {

        it('Easy case for removing spaces', function () {
            assert('hola como andas'.removeWhitespaces() === 'holacomoandas');
        });

        it('Case with various ', function () {
            assert('hola,  como ,,,    andas'.removeWhitespaces() === 'hola,como,,,andas');
        });
    });
    describe('Array extensions', function () {
        
        it('Equal case for arrays', function () {
            assert([1,2,3,4].equals([1,2,3,4]));
        });

        it('Not equal different lengths ', function () {
            assert(![1,2,3,4].equals([1,2,3,4,5]));
        });
        it('Not equal equal lengths ', function () {
            assert(![1,2,3,4].equals([1,2,3,5]));
        });
        it('Not equal not an array ', function () {
            assert(![1,2,3,4].equals(1));
        });
        
        it('First', function () {
            assert([1,2,3,4].first() === 1);
        });

        it('Rest', function () {
            assert([1,2,3,4].rest().equals([2,3,4]));
        });

    });


});


