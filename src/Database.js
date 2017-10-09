
var Database = function (facts, rules) {
  var checksWithFacts = function (query) {
    for (var i = 0; i < facts.length; i++) {
      if (facts[i].matchesQuery(query)) {
        return true
      }
    }
    return false
  }
  var checksWithRules = function (query) {
    var matchingRules = rules.filter(query.matches)
    for (var i = 0; i < matchingRules.length; i++) {
      var rule = matchingRules[i]
      var equivalentQueries = rule.getEquivalentQueries(query)
      if (equivalentQueries.every(checksWithFacts)) {
        return true
      }
    }
    return false
  }
  this.checkQuery = function (query) {
    return checksWithFacts(query) || checksWithRules(query)
  }
}

module.exports = Database
