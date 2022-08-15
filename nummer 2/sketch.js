/*
a. i dette program er det en god ide at bruge nogle globale variabler men somregelt skal man minimere antalet af globale variabler, både fordi koden bliver svær at læse og være fyldt med variabler man ikke ved hvor bliver brugt mens lokale variable er samlede og let læselige
der introduceres dog en kompleksitet af lokal variabler da man altid skal holde styr på hvilke variabler der er tilgænlige hvor.
desuden er det god træning til sprog uden en garbage collecter da man så fjerne variablen fra ram når den ikke længere skal bruges

b. ved at lave sine funktioner generele (tage et input) og kun have globale variabler som skal gemmes længere end en frame så som nuværende positioner eller objekter så de ikke skal laves hver frame


*/

let x = 11
let y = 11
let a = 1
let b = 0
let rectangels = []

function setup(){
  createCanvas(windowWidth, windowHeight)
}
function draw(){
  background("white")
  fill("red")
  stroke("black")
  circle(x,y,20)
  x = x + a
  y = y + b
  rectangels.forEach(i => {
    i.draw()
  });
}

function keyPressed(){
  if (keyCode == LEFT_ARROW && a >= 0){
    a = -1
    b = 0
  }
  else if (keyCode == RIGHT_ARROW && a <= 0){
    a = 1
    b = 0
  }
  else if (keyCode == DOWN_ARROW && b <= 0){
    b = 1
    a = 0
  }
  else if (keyCode == UP_ARROW && b >= 0){
    b = -1
    a = 0
  }else if (keyCode == 32){
    print("space",mouseX, mouseY, x, y)
    rectangels[rectangels.length] = new rectangel(mouseX,mouseY,x,y)
  }
}

class rectangel{
  constructor(x,y,w,h){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }
  draw(){
    rect(this.x, this.y, this.w, this.h)
  }
}