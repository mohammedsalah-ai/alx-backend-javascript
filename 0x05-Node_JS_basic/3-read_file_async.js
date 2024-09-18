const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        let numStudents = 0;
        const fieldStudents = {}; // Object.create(Object.prototype) == {}
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
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
