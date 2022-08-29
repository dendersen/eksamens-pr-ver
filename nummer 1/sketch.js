function setup() {
  createCanvas(windowWidth-10, windowHeight-10);
  ellipseMode(CENTER)
}

let run = false
let circles = []
let prep = -2
let vectorMovement = false

function draw() {
  background(80,80,80)
  if (!run){
    let max = 50
    for(let i = 0; i < max; i++){
      circles[i] = new circle(
        random(0, width*0.9),
        Math.floor(random(0, height*0.9)),
        200,
        200,
        i+3,
        10,
        i,
        vectorMovement
      )
    }
    run = true
  }
  for(let i = 0; i < circles.length; i++){
    circles[i].move()
    circles[i].draw()
    for(let j = i+1; j < circles.length; j++){
      print("attempting standard collision")
      if (colliding(i,j)){
        // print(i,circles[i])
        // print(j,circles[j])
        circles[i].colission()
        circles[j].colission()
      }
    }
  }
  prep ++
}

class circle{
  constructor(x,y,a,b,size,time,id, vectorMove){
    ellipse(x,y,size)
    this.a = a
    this.b = b
    this.x = x
    this.y = y
    this.size = size/2
    this.time = time
    this.col = []
    this.col[0] = random(0,255)
    this.col[1] = random(0,255)
    this.col[2] = random(0,255)
    this.id = id
    this.vectorMove = vectorMove
    if(vectorMove){
      this.a = a / time
      this.b = b / time
    }
  }

  draw(){
    fill(this.col[0], this.col[1], this.col[2])
    ellipse(this.x,this.y,this.size*2)
  }

  move(){
    if (!this.vectorMove){
      if (this.time != 0){
        this.x = this.x + ((this.a - this.x) / this.time)
        this.y = this.y + ((this.b - this.y) / this.time)
        this.time--
      }else{
        this.a = Math.floor(random(0+this.size, windowWidth-this.size))
        this.b = Math.floor(random(0+this.size, windowHeight-this.size))
        this.time = Math.floor(random(50, 55))
        this.move()
      }
    }else{
      x + this.a
      y + this.y
    }
  }
  colission(){
    if(this.vectorMove){
      let x = this.x
      let y = this.y
      let a = this.a
      let b = this.b

      this.time = 0
      this.move()
      this.move()
      if(collidingAll(this.id)){
        print("retrying collision")
        this.x = x
        this.y = y
        this.a = a
        this.b = b
        try{
          try{
            this.colission()
          } catch{
            // this.colission()
            print("simple collision atempting")
            this.a = width - this.a
            this.b = height - this.b
          }
        }catch{
          print("skipping collision, id: " + this.id)
        }
      }
    }else{
      //skal finde en tangent og regne en retning som var tangenten et spejl
    }
  }
}

function colliding(i,j){
  let distance = 0
  let sizeC = 2
  try{
    distance = Math.sqrt(Math.pow((circles[j].x  - circles[i].x),2) + Math.pow((circles[j].y - circles[i].y), 2))
    sizeC = circles[j].size + circles[i].size
    // print(i,circles[i])
    // print(j,circles[j])
  }catch{
    // print(i,circles[i])
    // print(j,circles[j])
  }

  let bool = distance < sizeC
  
  // if(bool){
    // print(circles[i].x,circles[i].y,circles[i].size)
    // print(circles[j].x,circles[j].y,circles[j].size)
    // print(distance," - ",sizeC)
  // }
  return (bool)
}

function collidingAll(c){
  for(let i = 0; i < circles.length; i++) {
    if(i != c){
      print(c,i)
      if(colliding(c,i)){
        return(true)
      }
    }
  }
}