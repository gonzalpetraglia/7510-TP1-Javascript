var QueryBuilder = require('./QueryBuilder.js')
var DatabaseBuilder = require('./DatabaseBuilder.js')

var Interpreter = function () {
  var dbIsValid = false
  this.parseDB = function (clauseList) {
    
      var dbBuilder = new DatabaseBuilder()
      for (var i = 0; i < clauseList.length; i++) {
        dbBuilder.addClause(clauseList[i])
      }
      this.database = dbBuilder.buildDB()
      dbIsValid = true
    
  }
  this.checkQuery = function (queryString) {
    var query = (new QueryBuilder()).buildQuery(queryString)
    return dbIsValid && query && this.database.checkQuery(query)
  }
}

module.exports = Interpreter
