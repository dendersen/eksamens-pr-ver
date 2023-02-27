class Point{
  constructor(x,y){
    this.x = x
    this.y = y
    this.dist = [this.euclid,this.manhattan,this.chebyshev]
  }
  distance(version,point){
    return this.dist[version](point)
  }
  euclid(point){
    return sqrt((this.x-point.x)**2 + (this.y-point.y)**2)
  }
  manhattan(point){
    return abs(this.x-point.x) + abs(this.y-point.y)
  }
  chebyshev(point){
    return max(abs(this.x - point.x),abs(this.y - point.y))
  }
  distAllPoints(arr,calculationID){
    let distance = []
    for(let i = 0; i < arr.length;i++){
      distance[distance.length] = [this.distance(calculationID,arr[i]),arr[i]]
    }
    return distance
  }
  distNearestPoints(arr,calculationID,length){
    let distance = this.distAllPoints(arr,calculationID)
    distance.sort(distance)
    return distance[0,length]
  }
}

