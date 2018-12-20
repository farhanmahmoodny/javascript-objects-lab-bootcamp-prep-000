
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  var newObject = Object.assign({}, object)
  console.log(newObject)
  return object
}
