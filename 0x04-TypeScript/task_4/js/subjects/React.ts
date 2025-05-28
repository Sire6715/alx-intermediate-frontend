/// <reference path="./Subjects.ts" />
/// <reference path="./Teacher.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is a list of requirements for React";
    }
    getAvailableTeacher(): string {
      if (
        !this.teacher ||
        this.teacher.experienceTeachingReact === undefined ||
        this.teacher.experienceTeachingReact <= 0
      ) {
        return "No available teacher";
      }
    }
  }
}
