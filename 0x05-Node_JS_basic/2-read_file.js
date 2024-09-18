const fs = require('fs');

function countStudents(path) {
  if (fs.existsSync(path)) {
    let numStudents = 0;
    const fieldStudents = {}; // Object.create(Object.prototype) == {}
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const lines = data.toString().split('\n');
    for (const line of lines.slice(1)) {
      if (line) {
        const entry = line.split(',');
        const studentFirstName = entry[0];
        const field = entry[3];
        numStudents += 1;
        if (Object.prototype.hasOwnProperty.call(fieldStudents, field)) {
          fieldStudents[field].push(studentFirstName);
        } else {
          fieldStudents[field] = [studentFirstName];
        }
      }
    }
    console.log(`Number of students: ${numStudents}`);
    for (const [field, listFirstNames] of Object.entries(fieldStudents)) {
      console.log(
        `Number of students in ${field}: ${listFirstNames.length}. List: ${listFirstNames.join(', ')}`,
      );
    }
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
