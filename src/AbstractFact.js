var Fact = require('./Fact.js')
var Query = require('./Query.js')
var AbstractFact = function (name, abstractParametersList) {
  this.replaceParameters = function (replacementMap) {
    var replacedParameters = []
    for (var i = 0; i < abstractParametersList.length; i++) {
      replacedParameters.push(replacementMap[abstractParametersList[i]])
    }
    return new Query(name, replacedParameters)
  }
  this.matchesQuery = function (query) {
    throw Error("Cannot match abstract fact")
  }
}

AbstractFact.prototype = Object.create(Fact.prototype)
AbstractFact.prototype.construct = AbstractFact

module.exports = AbstractFact
