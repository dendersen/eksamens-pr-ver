package dk.mtdm;

import processing.core.PApplet;

public class Main {
  static Sketch sketch; 
  
    public static void main(String[] args) {
    String[] processingArgs = {"Sketch"};
    sketch = new Sketch();
    PApplet.runSketch(processingArgs,sketch);
  }
}
