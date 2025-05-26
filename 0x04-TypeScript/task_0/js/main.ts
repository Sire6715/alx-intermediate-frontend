interface student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const John: student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const Jane: student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 20,
  location: "Chicago",
};

const studentList: object[] = [John, Jane];

function renderTable(students: object[]): void {
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");

  const headers = ["First Name", "Location"];
  headers.forEach((headerText) => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });

  table.appendChild(headerRow);

  students.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
    firstNameCell.textContent = (student as student).firstName;
    locationCell.textContent = (student as student).location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  document.body.appendChild(table);
}

renderTable(studentList);


