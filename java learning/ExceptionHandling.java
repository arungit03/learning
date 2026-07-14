public class ExceptionHandling {
    public static void main(String[] args) {
        System.out.println("Example 1: ArithmeticException handling");
        handleDivideByZero();

        System.out.println();
        System.out.println("Example 2: ArrayIndexOutOfBoundsException handling");
        handleArrayIndexOutOfBounds();
    }

    private static void handleDivideByZero() {
        try {
            int a = 10;
            int b = 0;
            int result = a / b; // causes ArithmeticException
            System.out.println("Result: " + result);
        } catch (ArithmeticException ex) {
            System.out.println("Caught ArithmeticException: Cannot divide by zero.");
            System.out.println("Exception message: " + ex.getMessage());
        } finally {
            System.out.println("Finally block always runs after try/catch.");
        }
    }

    private static void handleArrayIndexOutOfBounds() {
        int[] numbers = {1, 2, 3};

        try {
            System.out.println("Accessing numbers[5]: " + numbers[5]);
        } catch (ArrayIndexOutOfBoundsException ex) {
            System.out.println("Caught ArrayIndexOutOfBoundsException: Index is outside the array range.");
            System.out.println("Exception message: " + ex.getMessage());
        }
    }
}
