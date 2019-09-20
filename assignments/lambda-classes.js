// CODE here for your Lambda Classes

// * **Instructors** - extensions of Person
// * **Students** - extensions of Person
// * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

class Person {
  constructor(attr) {
    (this.name = attr.name),
      (this.age = attr.age),
      (this.location = attr.location);
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}`;
  }
}

// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
  constructor(instAttr) {
    super(instAttr);
    this.specialty = instAttr.specialty;
    this.favLanguage = instAttr.favLanguage;
    this.catchPhrase = instAttr.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor {
  constructor(pmAttr) {
    super(pmAttr);
    this.gradClassName = pmAttr.gradClassName;
    this.favInstructor = pmAttr.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times`;
  }
  debugsCode(subject, student) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
  }
  listsSubjects() {
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${student.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

const instructorOne = new Instructor({
  name: "Britt",
  age: 30,
  location: "USA",
  specialty: "Redux",
  favLanguage: "JavaScript",
  catchPhrase: "Don't forget the homies!"
});

const pmOne = new ProjectManager({
  name: "Cam",
  age: 27,
  location: "USA",
  gradClassName: "WEB24",
  favInstructor: "Britt"
});

const studentOne = new Student({
  name: "Brandon",
  age: 26,
  location: "USA",
  favSubjects: ["HTML", "CSS", "JavaScript"]
});

console.log(studentOne.sprintChallenge("JavaScript"));
console.log(pmOne.debugsCode("Science", studentOne));
console.log(pmOne.standUp("WEB24"));
console.log(instructorOne.demo("Javascript"));
console.log(instructorOne.grade(studentOne, "JavaScript"));
console.log(studentOne.listsSubjects());
