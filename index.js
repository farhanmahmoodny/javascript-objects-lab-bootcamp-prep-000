
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  console.lgo(object)
  var newObject = Object.assign({}, object)
  console.log(newObject)

}
