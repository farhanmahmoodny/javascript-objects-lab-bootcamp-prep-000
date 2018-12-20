
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  var newobject = Object.assign({}, obj, { [key]: value })
  object[key] = value
  return object
}
