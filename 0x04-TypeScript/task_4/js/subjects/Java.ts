/// <reference path="Subjects.ts" />
/// <reference path="Teacher.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return "Here is a list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (
        !this.teacher ||
        this.teacher.experienceTeachingJava === undefined ||
        this.teacher.experienceTeachingJava <= 0
      ) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}