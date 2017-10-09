Array.prototype.first = function () {
  return this[0]
}
Array.prototype.rest = function () {
  return this.slice(1)
}
Array.prototype.equals = function (anotherArray) {
  if (!anotherArray ||
      !(anotherArray instanceof Array) ||
      (this.length !== anotherArray.length)
      ) {
    return false
  }
  for (var i = 0; i < this.length; i++) {
    if (this[i] !== anotherArray[i]) {
      return false
    }
  }
  return true
}

Array.prototype.filterNotFalsies = function () {
  var notFalsy = function (element) {
    return !!element;
  }
  return this.filter(notFalsy)
}

module.exports = Array

String.prototype.removeWhitespaces = function () {
  return this.split(' ').join('')
}

module.exports = String
