var Clause = function () {
  this.matchesQuery = function (query) {
    throw Error('Abstract class trying to be used')
  }
}

module.exports = Clause
