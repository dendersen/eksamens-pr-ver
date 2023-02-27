package dk.mtdm;

import processing.core.PGraphics;
import java.lang.Math;

public class vector {
  float x;
  float y;
  float z = 0;
  public vector(float x, float y){
    this.x = x;
    this.y = y;
  }
  public vector(float x, float y, float z){
    this.x = x;
    this.y = y;
    this.z = z;
  }
  public void draw(PGraphics g){
    g.line(0, 0, x, y);
    float scale = (float) (x*0.08 + y*0.08);
    g.triangle(x, y, x-scale,y,x,y-scale);
  }
  public void draw(PGraphics g,float x,float y){
    g.push();
    g.translate(x, y);
    draw(g);
    g.pop();
  }
  public void draw(PGraphics g, vector v) {
    draw(g, v.x, v.y);
  }
  public void add(vector v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
  }
  public void substract(vector v){
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
  }
  public float skalar(vector v) {
    return ((this.x * v.x) + (this.y * v.y) + (this.z * v.z));
  }
  public float lenght() {
    return (float) Math.sqrt(Math.pow(this.y,2)+Math.pow(this.y,2) + Math.pow(this.z,2));
  }
  public vector[] compositions() {
    vector[] out = new vector[3];
    out[0] = new vector(this.x,0);
    out[1] = new vector(0, this.y);
    out[2] = new vector(0, 0,this.z);
    return out;
  }
  public void setLength(float length) {
    float l = this.lenght();
    this.x = this.x / l;
    this.y = this.y / l;
    this.z = this.z / l;
    System.out.println(this.lenght());
    this.x = this.x * length;
    this.y = this.y * length;
    this.z = this.z * length;
    System.out.println(this.lenght());
  }
  public vector copy() {
    return new vector(x, y, z);
  }
}