var Database = require('./Database.js')
var String = require('./Extensions.js').String
var Array = require('./Extensions.js').Array
var Rule = require('./Rule.js')
var AbstractFact = require('./AbstractFact.js')
var Fact = require('./Fact.js')

var DatabaseBuilder = function () {
  var facts = []
  var rules = []
  var factRegex = /^\w+\((\w+,)*\w+\).$/
  var ruleRegex = /^\w+\((\w+,)*\w+\):-(\w+\((\w+,)*\w+\),)*\w+\((\w+,)*\w+\).$/
  var isFact = function (clause) {
    return factRegex.test(clause)
  }
  var isRule = function (clause) {
    return ruleRegex.test(clause)
  }
  
  this.addClause = function (clause) {
    clause = clause.removeWhitespaces()//TODO Refactor rule and fact creation
    if (isFact(clause)) {
      var tokens = clause.split(/[,\(\).]/).filterNotFalsies()
      
      facts.push(new Fact(tokens.first(), tokens.rest()))
    }
    if (isRule(clause)) {
      var tokensRule = clause.split(':-').filterNotFalsies()
      var title = tokensRule.first()
      var abstractFactsString = tokensRule[1].split("),").filterNotFalsies()
      var abstractFacts = []
      for (var i = 0; i < abstractFactsString.length; i++) {
        var tokensFromAbsFact = abstractFactsString[i].split(/[,\(\).]/).filterNotFalsies()
        abstractFacts.push(new AbstractFact(tokensFromAbsFact.first(), tokensFromAbsFact.rest()))
      }
      var titleTokens = title.split(/[,\(\).]/).filterNotFalsies()
      var name = titleTokens.first()
      var abstractParams = titleTokens.rest()

      rules.push(new Rule(name, abstractParams, abstractFacts))
    }
  }
  this.buildDB = function () {
    return new Database(facts, rules)
  }
}

module.exports = DatabaseBuilder
