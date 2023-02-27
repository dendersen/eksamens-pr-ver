from math import sqrt
from struct import pack,unpack
from typing import List


class Point:
  pass

class Point:
  def __init__(self,x:float,y:float,z:int=0) -> None:
    self.z:float = z
    self.x:float = x
    self.y:float = y
    self.dist = [self.euclid,self.manhattan,self.chebyshev,self.hammingManhattan,self.hammingEuclid,self.hammingChebyshev]
  
  def distance(self,version:int,point:Point):
    return self.dist[version](point)
  
  def euclid(self,point:Point)->float:
    return sqrt((self.x-point.x)**2 + (self.y-point.y)**2 + (self.y-point.z)**2)
  
  def manhattan(self,point:Point)->float:
    return abs(self.x-point.x) + abs(self.y-point.y) + abs(self.y-point.z)
  
  def chebyshev(self,point:Point)->float:
    return max(abs(self.x - point.x),abs(self.y - point.y),abs(self.y - point.z))
  
  def hamming(self,point:Point) -> List[int]:
    x1 = self.floatToBin(self.x)
    y1 = self.floatToBin(self.y)
    z1 = self.floatToBin(point.z)
    x2 = self.floatToBin(point.x)
    y2 = self.floatToBin(point.y)
    z2 = self.floatToBin(point.z)
    diffx = self.dif(x1,x2)
    diffy = self.dif(y1,y2)
    diffz = self.dif (z1,z2)
    return [diffx,diffy,diffz]
  
  def hammingManhattan(self,point:Point)->float:
    diff = self.hamming(point)
    return sum(diff)
  
  def hammingEuclid(self,point:Point):
    diff = self.hamming(point)
    return sqrt(diff[0]**2 + diff[1]**2 + diff[2]**2)
  
  def hammingChebyshev(self,point:Point):
    diff = self.hamming(point)
    return max(diff[0],diff[1],diff[2])
  
  def floatToBin(F:float)->str:
    return bin(unpack("!i",pack("!f",F))[0]).replace("0b","")
  
  def dif(i:list,j:list):
    Dif = 0
    for l,L in zip(i,j):
      Dif += l != L
    return Dif

  def distAllPoints(self,arr:List[Point],calculationID:int):
    distance = []
    for i in arr:
      distance.append((self.distance(calculationID,i),i))
    return distance

  def distNearestPoints(self,arr:List[Point],calculationID:int,length:int):
    distance = self.distAllPoints(arr,calculationID)
    distance.sort(distance)
    return distance[0:length]
