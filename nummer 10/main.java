/*
en string er en liste af char
den kan derfor behndles som en hver anden liste, dog har den en masse ajove funktioner knyttet til den.
*/
public class main {
  public static void main(String[] args) {
    // RunMethods()
    System.out.println(
      plagiat(
        "javascript er et unikt sprog, med sin helt egen syntaks som har intet at gører med syntaxen for java eller C",
        "syntaxen for både java og C ligner hinanden meget og i nyere tid har javascript fået en meget lignende syntax", 
        7
      )
    );
  }
  public static String addStringInString(String test,int insert, String input) {
    String add = test.substring(0,insert).concat(input).concat(test.substring(insert));
    return add;
  }
  public static String removeCharOrStringFromString(String test, String RegexForRemoval){
    String remove = test.replace(RegexForRemoval,"");
    return remove;
  }
  public static Boolean stringContainsString(String test, String regexForTest){
    return test.contains(regexForTest);
  }
  /*
  den tjeker om teksten er et palindron atså staves på samme måde forfra som bagfra
  */
  public static Boolean palindrom(String test){
    int i = 0;
    int j = test.length()-1;
    while (true){
      if (j-i <= 1){
        return true;
      }
      if (test.charAt(i) != test.charAt(j))
      return false;
      i++;
      j--;
    }
  }
  
  public static String plagiat(String input, String real,int len){
    String problem = "";
    for (int i = 0; i < input.length()-len;i++){
      if (real.contains(input.substring(i, i+len))){
        problem += "tekst = " + input.substring(i, i+len) + " | index = " + i + " || ";
        i += len-1;
      }
    }
    return problem;
  }
  /*
  denne kode er ikke optimal hvis der skulle være brugt mange små stykker fra en tekst men vill være god til at se om der var blevet taget store stykker
    den tillader også for forskellige grader af undersøgelse
    der tillades at man nemt kan tjekke om det bare er en simple sætning der skaber problemer eller om der bliver fundet complexe sætninger som er mere sansynlige at være plagiat
    */
    
    public static void RunMethods(){
      System.out.println(addStringInString("hello my is david",8,"name "));
      System.out.println(removeCharOrStringFromString("this is a program writen in javascript","script"));
      System.out.println(stringContainsString("java is a fun language with many classes", "classes"));
      System.out.println(palindrom("kajak"));
    }
}