const person = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 29,
  job: 'Developer',
  skills: ['JavaScript', 'Node.js', 'React'],
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  introduce() {
    console.log(`Hi, I'm ${this.getFullName()}, ${this.age} years old, and I work as a ${this.job}.`);
  },
};

// Example usage:
person.introduce();
console.log(person.skills[1]); // Node.js
