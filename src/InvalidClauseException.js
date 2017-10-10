
var InvalidClauseException = function () {
    this.name = 'InvalidClauseException'
    this.stack = (new Error()).stack
  }
  
  InvalidClauseException.prototype = Object.create(Error.prototype)
  InvalidClauseException.prototype.constructor = InvalidClauseException
  
  module.exports = InvalidClauseException
  