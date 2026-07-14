

// public: access modifier that allows the class to be visible from any other class.
// class: keyword used to declare a class, which is a blueprint for objects.
// Hello: the name of the class; it must match the file name Hello.java.

public class Hello {

    // public: access modifier that allows the method to be called from outside the class.
    // static: means this method belongs to the class itself, not to an object instance.
    // void: means the method does not return any value.
    // main: the name of the special method where Java starts program execution.
    // String[] args: an array of String values that can hold command-line arguments.

    public static void main(String[] args) {

        // First Java Program
        /*
        This 
        is 
        a
        Java Code
        */
        String name = "Arun";
        System.out.println("I'm Arun");
        System.out.println("I'm learning Java");

        int l = name.length();
        System.out.println("Length of the name: " + l);
    }
}