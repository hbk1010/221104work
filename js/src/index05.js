const fruit = ['apple','orange','banana']

function toObj(a,b,c){
  // return {a:a,b:b,c:c}
  // 단축형
  return {a,b,c}
}

// const toOb = function(){}
// const toOb = (a,b,c) => {return {a:a,b:b,c:c}}
// 단축
// const toOb = (a,b,c) => {return {a,b,c}}
// 단축
const toOb = (a,b,c) => ({a,b,c})

console.log(toOb(...fruit))
console.log(...fruit)

// 
const word = [1,2,3,4,5,6,7,8]
const myWord = (a,b,c,...d) => ({a,b,c,d})
console.log(myWord(...word))
// ...fruit + abc