import java.util.Scanner;
public class Input {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your name:");
        String name = sc.nextLine();
        System.out.print("Enter your Age:");
        int age = sc.nextInt();
        System.out.print("Enter your CGPA:");
        float cgpa = sc.nextFloat();

        System.out.println("My Name is: " + name);
        System.out.println("My Age is :"+age);
        System.out.println("My CGPA is :"+cgpa);

        // Area of Rectangle
        System.out.println("Area of Rectangle");
        System.out.print("Enter Length of Rectangle:");
        double l = sc.nextDouble();
        System.out.print("Enter Width of Rectangle:");
        double w = sc.nextDouble();
        double area = l*w;
        System.out.println("Area :"+area+"cm^2");

        
    }
}
