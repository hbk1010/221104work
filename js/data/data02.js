import Data from './data01.json'
import Data02 from './data02.json'

console.log(Data)
console.log(Data.array)
console.log(Data.object.a)

// json -> 전역객체 -> JSON
const color = {
  title:'red',
  sample:'apple',
  no:123

  // 일반적인 객체를 JSON 처럼 바꿔주는것 -> stringify  위에는 ' ' 인데 stringify사용하면 " " 이 나온다
}
const str = JSON.stringify(color)
console.log(str)


// parse은  stringify 와 반대

const obj = JSON.parse(str)
console.log(obj)

