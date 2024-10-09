// Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Example usage
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false
};

console.log(teacher3);

// Extend the Teacher interface to create Directors
interface Directors extends Teacher {
    numberOfReports: number; // This is a mandatory attribute for Directors
}

// Example usage of Directors
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};

console.log(director1);

// Define the interface for the function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe"));  // Output: J. Doe

// Define the constructor interface
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Define the class interface
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method to simulate working on homework
    workOnHomework(): string {
        return "Currently working";
    }

    // Method to display the student's first name
    displayName(): string {
        return this.firstName;
    }
}

// Example usage
const student = new StudentClass("Jane", "Doe");
console.log(student.displayName()); // Output: Jane
console.log(student.workOnHomework()); // Output: Currently working
