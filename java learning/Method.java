public class Method {
    public static void main(String[] args) {
        greet("Arun");
        int result = add(8, 12);
        System.out.println("Addition result: " + result);
        System.out.println("Is 15 even? " + isEven(15));
    }

    public static void greet(String name) {
        System.out.println("Hello, " + name + "! Welcome to Java methods.");
    }

    public static int add(int a, int b) {
        return a + b;
    }

    public static boolean isEven(int number) {
        return number % 2 == 0;
    }
}
