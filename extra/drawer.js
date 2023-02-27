let points = []
function setup(){
  createCanvas(300, 300)
  for (let i = 0; i < 10; i++){
    points[points.length] = new Point(random(0, width),random(0, height));
  }
}


function draw(){
  background(80)
  let knn = new Point(mouseX,mouseY)
  let dist = knn.distAllPoints(points,0)
  for (let i = 0; i < dist.length; i++){
    point(dist[i][0].x, dist[i][0].y)
  }
}
