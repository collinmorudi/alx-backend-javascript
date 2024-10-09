import { Subjects } from './Teacher';
import { Subjects as SubjectNamespace } from './Subject';

export namespace Subjects {
    export class Java extends SubjectNamespace.Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}
