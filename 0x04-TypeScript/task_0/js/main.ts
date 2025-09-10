// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Simon",
  lastName: "Dawit",
  age: 23,
  location: "Ethiopia",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Kenya",
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Render a table in plain JS
const table = document.createElement("table");
const headerRow = table.insertRow();

const header1 = headerRow.insertCell();
header1.textContent = "First Name";

const header2 = headerRow.insertCell();
header2.textContent = "Location";

// Loop through students and add rows
studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  firstNameCell.textContent = student.firstName;

  const locationCell = row.insertCell();
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
