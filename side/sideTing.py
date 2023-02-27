# https://runestone.academy/ns/books/published/thinkcspy/ClassesDiggingDeeper/Exercises.html

from math import sqrt

def test(x,y):
  if not x == y:
    raise(Exception("fail"))


class Point:
  def __init__(self,x:float,y:float):
    self.x:float = x
    self.y:float = y
  def __str__(self):
    return "(" + str(self.x) + "," + str(self.y) + ")"
class Rectangle:
  pass
class Rectangle:
  def __init__(self,location:Point,width:float,height:float)->None:
    self.location:Point = location
    self.width:float = width
    self.height:float = height
  def getWidth(self)->float:
    return self.width
  def getHeight(self)->float:
    return self.height
  def __str__(self)->str:
    return "bottomLeft: " + str(self.location) + "\nwidth: " + str(self.width) + "\nheigth: " + str(self.height)
  def area(self)->float:
    return self.width*self.height
  def perimeter(self)->float:
    return self.width * 2 + self.height * 2
  def transpose(self)->None:
    temp = self.width
    self.width = self.height
    self.height = temp
  def contains(self,p:Point)->bool:
    return (self.location.x <= p.x and self.location.y <= p.y) and (self.location.x+self.width > p.x and self.location.y+self.height > p.y)
  def diagonal(self)->float:
    return sqrt(self.width**2 + self.height**2)
  def corner(self,i:int)->Point:
    if (i == 0):
      return self.location
    elif (i == 1):
      return Point(self.location.x,self.location.y + self.width)
    elif (i == 2):
      return Point(self.location.x + self.height,self.location.y + self.width)
    else:
      return Point(self.location.x + self.height,self.location.y)
  def collision(self,rect:Rectangle)->bool:
    a = [rect.corner(i) for i in range (0,4)]
    for i in a:
      if self.contains(i):
        return True
    a = [self.corner(i) for i in range (0,4)]
    for i in a:
      if rect.contains(i):
        return True
    return False




r = Rectangle(Point(0, 0), 10, 5)
test(r.area(), 50)
r = Rectangle(Point(0, 0), 10, 5)
test(r.perimeter(), 30)
r = Rectangle(Point(100, 50), 10, 5)
test(r.width, 10)
test(r.height, 5)
r.transpose()
test(r.width, 5)
test(r.height, 10)
r = Rectangle(Point(0, 0), 10, 5)
test(r.contains(Point(0, 0)), True)
test(r.contains(Point(3, 3)), True)
test(r.contains(Point(3, 7)), False)
test(r.contains(Point(3, 5)), False)
test(r.contains(Point(3, 4.99999)), True)
test(r.contains(Point(-3, -3)), False)
print("succes")