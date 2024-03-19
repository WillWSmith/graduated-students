const students = [
  {
    name: "Ankit",
    age: 22,
    grade: 85,
    email: "ankit@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Kayla",
    age: 28,
    grade: 92,
    email: "kayla@example.com",
    phone: "555-555-5555",
    graduated: false
  },
  {
    name: "Charina",
    age: 19,
    grade: 89,
    email: "charina@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Bernard",
    age: 30,
    grade: 75,
    email: "bernard@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Kevin",
    age: 36,
    grade: 82,
    email: "kevin@example.com",
    phone: "555-555-5555",
    graduated: false
  },
  {
    name: "Hasheem",
    age: 41,
    grade: 82,
    email: "hasheem@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Erwin",
    age: 34,
    grade: 72,
    email: "erwin@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Christopher",
    age: 50,
    grade: 86,
    email: "christopher@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Angela",
    age: 27,
    grade: 80,
    email: "angela@example.com",
    phone: "555-555-5555",
    graduated: true
  }
];

const graduatedStudents = (listOfStudents) => {
  let result = [];
  for (let i = 0; i < listOfStudents.length; i++) {
    const { name, graduated, email } = listOfStudents[i];
    if (graduated === true) {
      result.push(`${name} has graduated and their diploma will be sent to ${email}.`);
    } else if (graduated === false) {
      result.push(`${name} has not graduated yet, no diploma will be sent.`);
    }
  }
  return result;
};

graduatedStudents(students);

/* Output

[
  ‘Ankit has graduated and their diploma will be sent to ankit@example.com.’,
  ‘Kayla has not graduated yet, no diploma will be sent.’,
  ‘Charina has graduated and their diploma will be sent to charina@example.com.’
]
*/
