import java.util.Scanner;

public class HelloWorld { // Rename if needed, but keep the filename and class name consistent
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to the Resume Builder!");

        System.out.print("Enter your full name: ");
        String name = scanner.nextLine();

        System.out.print("Enter your email address: ");
        String email = scanner.nextLine();

        System.out.print("Enter your phone number: ");
        String phone = scanner.nextLine();

        System.out.print("Enter your professional summary: ");
        String summary = scanner.nextLine();

        System.out.print("Enter your skills (comma-separated): ");
        String skills = scanner.nextLine();

        System.out.print("Enter your work experience (job title and years, comma-separated): ");
        String workExperience = scanner.nextLine();

        System.out.print("Enter your education details (degree and institution, comma-separated): ");
        String education = scanner.nextLine();

        scanner.close();

        String resumeContent = String.format(
            "Name: %s\nEmail: %s\nPhone: %s\n\nSummary:\n%s\n\nSkills:\n%s\n\nWork Experience:\n%s\n\nEducation:\n%s",
            name, email, phone, summary, skills, workExperience, education
        );

        System.out.println("\n===== YOUR RESUME =====");
        System.out.println(resumeContent);

        // Save to file
        try (java.io.FileWriter writer = new java.io.FileWriter("resume.txt")) {
            writer.write(resumeContent);
            System.out.println("\nResume saved to resume.txt");
        } catch (java.io.IOException e) {
            System.out.println("An error occurred while saving the resume.");
        }
    }
}

