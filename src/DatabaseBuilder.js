var Database = require('./Database.js')
var String = require('./Extensions.js').String
var Array = require('./Extensions.js').Array
var FactBuilder = require('./FactBuilder.js')
var RuleBuilder = require('./RuleBuilder.js')
var InvalidClauseException = require('./InvalidClauseException.js')

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
      var factBuilder = new FactBuilder()
      facts.push(factBuilder.buildFact(clause))
      return
    }
    if (isRule(clause)) {
      var ruleBuilder = new RuleBuilder()
      rules.push(ruleBuilder.buildRule(clause))
      return
    }
    throw new InvalidClauseException()
  }
  this.buildDB = function () {
    return new Database(facts, rules)
  }
}

module.exports = DatabaseBuilder
