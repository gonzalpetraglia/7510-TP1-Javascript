
var Rule = function (name, abstractParameters, abstractFactsList) {
  var generateReplaceMap = function (query) {
    var map = {}
    for (var i = 0; i < abstractParameters.length; i++) {
      map[abstractParameters[i]] = query.getParameters()[i]
    }
    return map
  }
  var replaceParameters = function (abstractFact, query) {
    return abstractFact.replaceParameters(generateReplaceMap(query))
  }
  this.getEquivalentQueries = function (query) {
    if (!this.matchesQuery(query)) {
      throw Error('Invalid operation')
    }
    var equivalentQueries = []
    for (var i = 0; i < abstractFactsList.length; i++) {
      equivalentQueries.push(replaceParameters(abstractFactsList[i], query))
    }
    return equivalentQueries
  }
  this.matchesQuery = function (query) {
    return query.getName() === name && query.getParameters().length === abstractParameters.length
  }
}

module.exports = Rule
