import { Subjects } from './Teacher';
import { Subjects as SubjectNamespace } from './Subject';

export namespace Subjects {
    export class Cpp extends SubjectNamespace.Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}
