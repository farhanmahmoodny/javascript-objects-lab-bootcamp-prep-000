
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var obj = object[key] = value
  var newObject = Object.assign({}, object)
  return obj
}
