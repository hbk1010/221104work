const fruit = ['apple','orange','banana']
console.log(fruit)
console.log(...fruit)

function toObj(a,b,c){
  return {a:a,b:b,c:c}
}

console.log(toObj(fruit))
console.log(toObj(fruit[0],fruit[1],fruit[2]))
console.log(toObj(...fruit))