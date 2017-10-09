
var Rule = require('./Rule.js')
var AbstractFact = require('./AbstractFact.js')

var RuleBuilder = function () {
  this.buildRule = function (baseString) {
    var tokensRule = baseString.split(':-').filterNotFalsies()
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

    return new Rule(name, abstractParams, abstractFacts)
  }
}

module.exports = RuleBuilder
