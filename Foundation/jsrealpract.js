//Student dashbaord:
const students = [
  {
    id: 1,
    name: "Nova",
    age: 21,
    marks: 90,
    isActive: true,
  },
  {
    id: 2,
    name: "Rahul",
    age: 22,
    marks: 40,
    isActive: false,
  },
  {
    id: 3,
    name: "Priya",
    age: 20,
    marks: 75,
    isActive: true,
  },
];

function fetchStudents() {
  return Promise.resolve(students);
}

async function generateReport() {
  try {
    const data = await fetchStudents();

    const activeNames = data
      .filter((student) => student.isActive)
      .map((student) => student.name);

    const totalMarks = data.reduce((sum, student) => sum + student.marks, 0);

    return {
      activeNames,
      totalMarks,
    };
  } catch (error) {
    console.log(error.message);
  }
}

generateReport().then(console.log);

//function which return active student:

// function getActiveStudent(students){
//    return students.filter(students=>students.isActive===true);
// }

// //from active student get only names:
// const names=activeStudents.map(
//     students=>students.name
// );

// console.log(names);

//calculate the total marks
// const totalMarks=students.reduce(
//     (sum,student)=>sum+student.marks,
//     0
// );

// console.log(totalMarks);

// //destructuring:
// const student=students[0];
// const{name,marks}=student;
// console.log(name);
// console.log(marks);
