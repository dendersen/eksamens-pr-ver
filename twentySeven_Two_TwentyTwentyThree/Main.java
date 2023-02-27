package twentySeven_Two_TwentyTwentyThree;

import twentySeven_Two_TwentyTwentyThree.Point;
import processing.core.PGraphics;

/**
 * når der skabes en type ved hjælp af en klasse definere man en klasse som kan indeholder feilds som er interne variabler. 
 * på den måde har man fuld kontroll hvad typen kan<br>
 * for at lave en instanc af en klasse (et objekt) skal man kalde klassens contsructor som vil forberede instansen efter de givne parametre
 * for at kalde en statisk metode kan (bør) man benytte sig af klassen istedet for et objekt ved at tage objektets navn og sætte et punktum efter
 * derimod skal en ikke statisk metode kaldes gennem en instanse hvor man igen sætter et punktum efter men denne gang kan der benyttes objektets fields
 */
public class Main {
  
  /**
   * opstiler kravende for en form: den skal kunne tegnes;
   */
  public abstract class GeometriskForm {
    protected PGraphics g;
    public GeometriskForm(PGraphics g){
      this.g = g;
    }

    public abstract void show();
  }

  /**
   * GeometriskForm
   * allows for infinent corners
   */
  public class infinyCorner extends GeometriskForm {
    protected Point[] corners;
    
    public infinyCorner(Point[] corners, PGraphics g){
      super(g);
      this.corners = corners;
    }

    public void show(){
      for (int i = 1; i < corners.length; i++) {
        g.line(corners[i-1].getX(), corners[i-1].getY(), corners[i].getX(), corners[i].getY());
      }
      g.line(corners[0].getX(), corners[0].getY(), corners[corners.length-1].getX(), corners[corners.length-1].getY());
    }
  }
  
  /**
   * generates a square from 2 points
   */
  public class Square extends infinyCorner{

    public Square(Point topLeft,Point size, PGraphics g) {
      super(Square.getCorners(topLeft,size), g);
    }
    private static Point[] getCorners(Point topLeft, Point size){
      Point[] out = new Point[4];
      out[0] = topLeft;
      out[1] = new Point(topLeft.getX()+size.getX(), topLeft.getY());
      out[2] = new Point(topLeft.getX()+size.getX(), topLeft.getY()-size.getY());
      out[3] = new Point(topLeft.getX(), topLeft.getY()-size.getY());
      return out;
    }
  }
  
  /**
   * makes it create a sphere instead
   */
  public class Cirkle extends GeometriskForm{
    private Point center;
    private float radius;

    public Cirkle(Point center, int radius, PGraphics g) {
      super(g);
      this.center = center;
      this.radius = radius;
    }

    @Override
    public void show() {
      this.g.circle(center.getX(), center.getY(), radius);
    }
  }

/**
 * indkapsling: klasser og oobjekter skal simplificere koden, dette gøres ved at gemme unødig kompleksitet fra brugeren (programøren). fx man skal gemme en verden som består af chunks som indeholder blocke, chunks kan styre individuele bloke og skal gemme dem men verden behøver ikke sådan en graniualitet så den spørg bare chunket om små stykker af data som ndvendigt mens chunk så kan redigere verdenen som nødvendigt
 * abstraction: tag en klasse som  blyant og kugle pen, de kan i teorien udvide den samme lasse skriveRedskab men klassen skriveRedskab kan ikke bruges som sin egen ting, man kan kræve at noget er et skrive redskab men man kan ikke medbringe en ting der kun er et skrive redskab, derfor kalder vi skriveRedskab for en abstrakt klasse, det er en klasse der stiler krav til hvordan en klasse ser ud uden at du kan benytte dig af klassen
 * nedarvning : det er muligt for en klasse at arve egenskaberne af en anden klasse, dette tillader den at blive brugt som var den en anden klasse mens den opføre sig som sin egen klasse ses igen skriveRedskabeerne kan du bruge både kuglepen og blyant som skrive redskab men ikke en blyant som kugle pen, når man kigge på nedarvning som typer så kan man gemme noget specific i noget mindre spicifikt men ikke noget uspisifikt i noget specifikt, jeg kan putte kuglepen i skriveRedskab  men ikke skriveRedskab i kuglepen
 * polymorfi  : polymorphi er en del af nedarvning og mere specifikt delen hvor en ting kan være mere en en ting, kuglepen er både kuglepen og skriveRedskab 
 */
}