// 구조분해 -> 

const color = ['red','blue','green']
const [a,b,c,d='data'] = color 
console.log(a,b,c,d)
console.log(a)

// 제외하고 추출하기
const word = ['moon','flower','cat','dog']
const [,no01,,no02] = word;
console.log(no01)