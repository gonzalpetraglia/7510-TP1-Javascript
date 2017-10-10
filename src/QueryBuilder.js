var Query = require('./Query.js')
var InvalidQueryException = require('./InvalidQueryException.js')
var String = require('./Extensions.js')

var QueryBuilder = function () {
  var isValidQueryString = function (baseString) {
    var pattern = /^\w+\((\w+,)*\w+\)$/
    return pattern.test(baseString)
  }
  this.buildQuery = function (baseString) {
    baseString = baseString.removeWhitespaces()
    if (!isValidQueryString(baseString)) {
      throw new InvalidQueryException()
    }
    var splittedString = baseString.split(/[\s,()]+/).filterNotFalsies()
    return new Query(splittedString.first(), splittedString.rest())
  }
}
module.exports = QueryBuilder
