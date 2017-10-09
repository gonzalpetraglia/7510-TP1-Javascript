var Query = require('./Query.js')

var QueryBuilder = function () {
  this.buildQuery = function (baseString) {
    var splittedString = baseString.split(/[\s,()]+/).filterNotFalsies()
    return new Query(splittedString.first(), splittedString.rest())
  }
}
module.exports = QueryBuilder
