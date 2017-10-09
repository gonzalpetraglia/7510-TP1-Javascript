
var Query = function (name, parametersList) {
  var self = this
  self.matches = function (clause) {
    return clause.matchesQuery(self)
  }
  self.getParameters = function () {
    return parametersList
  }
  self.getName = function () {
    return name
  }
}

module.exports = Query
