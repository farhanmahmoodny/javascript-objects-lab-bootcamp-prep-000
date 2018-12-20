
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  console.log(Object.assign({}, object))
  return object
}
