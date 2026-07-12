import java.util.Scanner;
public class If {
    public static void main(String[] args){
        int age;
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your age : ");
        age = sc.nextInt();

        // System.out.println("Enter your age : "+age);

        if(age>=18){
            System.out.println("You are eligible for voting");
        }
        else{
            System.out.println("You are not eligible for voting");
        }

        int year;
        System.out.print("Enter year : ");
        year = sc.nextInt();

        if(year%400==0 || (year%4==0 && year%100 !=0)){
            System.out.println(year+" is a leap year");
        }
        else{
            System.out.println(year+" is not a leap year");
        }
    }
}
