// Import the necessary modules
import { Subjects as TeacherNamespace } from './subjects/Teacher';
import { Subjects as CppNamespace } from './subjects/Cpp';
import { Subjects as JavaNamespace } from './subjects/Java';
import { Subjects as ReactNamespace } from './subjects/React';

// Create and export a constant cpp for Cpp Subjects
export const cpp = new CppNamespace.Cpp();

// Create and export a constant java for Java Subjects
export const java = new JavaNamespace.Java();

// Create and export a constant react for React Subjects
export const react = new ReactNamespace.React();

// Create and export one Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher: TeacherNamespace.Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};

// For Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());