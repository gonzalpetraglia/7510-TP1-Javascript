var Fact = require('./Fact.js')
var FactBuilder = function () {
  this.buildFact = function (baseString) {
    var tokens = baseString.split(/[,\(\).]/).filterNotFalsies()
    return new Fact(tokens.first(), tokens.rest())
  }
}

module.exports = FactBuilder