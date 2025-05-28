/// <reference path="./Teacher.ts" />
/// <reference path="./Subjects.ts" />

namespace Subjects {

export interface Teacher {
    experienceTeachingC?: number;
}

export class Cpp extends Subject {
 getRequirements():string {
    return "Here is a list of requirements for Cpp";
  }

  getAvailableTeacher(): string {
    if(!this.teacher || this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0)
   return `{availableTeacher: ${this.teacher.firstName}}`;
}
}}