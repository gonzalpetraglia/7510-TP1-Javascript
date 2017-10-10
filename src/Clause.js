var Clause = function () {
  this.matchesQuery = function (query) {
    throw new Error('Abstract class trying to be used')
  }
}

module.exports = Clause
