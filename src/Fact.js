var Clause = require('./Clause.js')
var Array = require('./Extensions.js').Array

var Fact = function (name, parameters) {
  this.matchesQuery = function (query) {
    return name === query.getName() && parameters.equals(query.getParameters())
  }
  this.toString = function () {
    return name.toString() + parameters.toString()
  }
}

Fact.prototype = Clause.prototype
Fact.prototype.constructor = Fact

module.exports = Fact
