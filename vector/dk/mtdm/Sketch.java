package dk.mtdm;


import processing.core.PApplet;

public class Sketch extends PApplet{
  vector a = new vector(400,200);
  vector b = new vector(100,200);
  vector c = a.copy();

  vector d = new vector(200,150);
  vector e = new vector(100,100);
  vector f = d.copy();

  vector g = new vector(140,100);
  vector h = new vector(130,800);
  vector i = g.copy();
  vector j = h.copy();

  vector k = new vector(623, 123);
  
  int state = 0;

  public void settings() {
    size(900, 900);
    c.add(b);
    f.substract(e);
    i.setLength(200);
    j.setLength(200);
  }
  public void setup(){
    strokeWeight(2);
    frameRate(1);
  }
  @Override
  public void draw(){
    switch (this.state) {
      case 0:
        background(80);
        c.draw(getGraphics());
        a.draw(getGraphics());
        b.draw(getGraphics(), a);
        break;
      case 1:
        background(80);
        d.draw(getGraphics());
        e.draw(getGraphics());
        f.draw(getGraphics(),e);
        break;
      case 2:
        background(80);
        g.draw(getGraphics());
        h.draw(getGraphics());
        i.draw(getGraphics());
        j.draw(getGraphics());
        break;
      case 3:
        background(80);
        int X__ = 100;
        int Y__ = 100;
        k.draw(getGraphics(),X__,Y__);
        k.compositions()[0].draw(getGraphics(),X__,Y__);
        k.compositions()[1].draw(getGraphics(),X__,Y__);
        break;

    
      default:
      background(80);
        break;
    }
    this.state = (this.state+1)%4;
  }
}