// task_4/js/subjects/Subject.ts

namespace Subjects {
    export class Subject {
        protected teacher!: Teacher; // Change from private to protected

        // Setter method for the teacher
        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}