
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  var newobject = Object.assign({}, obj, { [key]: value })
  return object
}
