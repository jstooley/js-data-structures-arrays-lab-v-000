const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver (name){
  return drivers.push(name)
}
function destructivelyPrependDriver (name){
  return drivers.unshift(name)
}
function destructivelyRemoveDriver (){
  return drivers.pop()
}
