var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');
var InvalidClauseException = require('../src/InvalidClauseException.js');
var InvalidQueryException = require('../src/InvalidQueryException.js');

var Interpreter = require('../src/interpreter');


describe("Interpreter with invalid db", function () {

    var dbInvalidOne = [
        "varon(juan).",
        "varon(pepe).",
        "varon(hector).",
        "varon(roberto).",
        "varon(alejandro).",
        "mujer(maria).",
        "mujer(cecilia).",
        "padre(juan, pepe).",
        "padre(juan, pepa).",
        "padre(hector, mar "
    ];

    var dbInvalidTwo = [
        "varon(juan).",
        "varon(pepe).",
        "varon(hector).",
        "varon(roberto).",
        "varon(alejandro).",
        "mujer(maria).",
        "mujer(cecilia).",
        "padre(juan, pepe).",
        "padre(juan, pepa).",
        "padre(hector, ma-r). "
    ];

    var dbInvalidThree = [
        "varon(juan).",
        "varon(pepe).",
        "varon(hector).",
        "varon(roberto).",
        "varon(alejandro).",
        "mujer(maria).",
        "mujer(cecilia).",
        "padre(juan, pepe).",
        "padre(juan, pepa).",
        "padre(hector, mar).... "
    ];

    var invalidQueryOne = "varon";
    var invalidQueryTwo = "varon(";
    var invalidQueryThree = "varon(dsa&)";
    var invalidQueryFour = "varo,n(maria, perla)";
    

    var validDB = [
        "varon(juan).",
        "varon(pepe).",
        "varon(hector).",
        "varon(roberto).",
        "varon(alejandro).",
        "mujer(maria).",
        "mujer(cecilia).",
        "padre(juan, pepe).",
        "padre(juan, pepa).",
        "padre(hector, maria).",
        "padre(roberto, alejandro).",
        "padre(roberto, cecilia).",
        "hijo(X, Y) :- varon(X), padre(Y, X).",
        "hija(X, Y) :- mujer(X), padre(Y, X)."
    ];

    var validQuery = 'padre(juan, pepe)';

    var interpreter = null;

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


    describe('Invalid db', function () {

        it('Invalid db incomplete fact', function () {
            interpreter = new Interpreter();
            expect(function () {interpreter.parseDB(dbInvalidOne)}).to.throw(InvalidClauseException());
        });

        it('Invalid db unexpected character', function () {
            interpreter = new Interpreter();
            expect(function () {interpreter.parseDB(dbInvalidTwo)}).to.throw(InvalidClauseException());
        });

        it('Invalid db extra dots', function () {
            interpreter = new Interpreter();
            expect(function () {interpreter.parseDB(dbInvalidThree)}).to.throw(InvalidClauseException());
        });

    });

    describe('Invalid query', function () {

        it('incomplete query1', function () {
            interpreter = new Interpreter();
            interpreter.parseDB(validDB);
            expect(function () {interpreter.checkQuery(invalidQueryOne)}).to.throw(InvalidQueryException());
        });
        it('incomplete query2', function () {
            interpreter = new Interpreter();
            interpreter.parseDB(validDB);
            expect(function () {interpreter.checkQuery(invalidQueryTwo)}).to.throw(InvalidQueryException());  
        });
        it('invalid character', function () {
            interpreter = new Interpreter();
            interpreter.parseDB(validDB);
            expect(function () {interpreter.checkQuery(invalidQueryThree)}).to.throw(InvalidQueryException());
        });
        it('unexpected comma', function () {
            interpreter = new Interpreter();
            interpreter.parseDB(validDB);
            expect(function () {interpreter.checkQuery(invalidQueryFour)}).to.throw(InvalidQueryException());
        });
        

    });


});


