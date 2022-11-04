//클래스

// class React {}
const Rect = class {
  constructor(height,width){
    this.height = height;
    this.width = width;
  }
  call(){
    return this.width * this.height
  }
}

const my = new Rect (100,200)
console.log(my.call())

class Rect2 extends Rect{
  constructor(height,width,num){
    super(width,height)
    this.num = num
  }

  action(){
    return this.width * this.height * this.num
  }
}

const my2 = new Rect2(50,100,2)
console.log(my2.call())