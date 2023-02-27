package twentySeven_Two_TwentyTwentyThree;

public class Point {
  private float x;
  private float y;
  private float z;
  public Point(float x, float y){
    this.x = x;
    this.y = y;
  }
  public Point(float x, float y, float z){
    this.x = x;
    this.y = y;
    this.z = z;
  }
  public float getX() {
    return x;
  }
  public float getY() {
    return y;
  }
  public float getZ() {
    return z;
  }
}
