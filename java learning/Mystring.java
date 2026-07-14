public class Mystring {
    public static void main(String[] args) {
      String name = "Arun Kumar v";

      System.out.println(name.length()); 
      char leter = name.charAt(0);
      int index = name.indexOf("u");
      int lastIndex = name.lastIndexOf("r");
       name = name.replace("v", "V"); // Replace v with V
      // name = name.toUpperCase();
      // name = name.toLowerCase();
      // name = name.trim(); // Remove unwanted spaces  
    
      System.out.println(leter); 
      System.out.println(index);
      System.out.println(lastIndex);
      System.out.println(name);

      if(name.isEmpty()){
          System.out.println("String is empty");
       }
      else{
          System.out.println("String is not empty");
          System.out.println("The String : "+name);
      }
       System.out.println("");
    }
}
