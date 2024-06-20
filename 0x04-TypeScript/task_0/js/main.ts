interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Lujaja",
    lastName: "Luvuga",
    age: 27,
    location: "Eldoret"
}

const student2: Student = {
    firstName: "Edith",
    lastName: "Banda",
    age: 28,
    location: "Malawi"
}

const studentsList: Student[] = [student1, student2];

function renderTable() {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    studentsList.forEach((student) => {
        const tr = document.createElement("tr");
        const tdFirstName = document.createElement("td");
        const tdLocation = document.createElement("td");

        // Set text content for the table cells
        tdFirstName.textContent = student.firstName;
        tdLocation.textContent = student.location;

        tr.appendChild(tdFirstName);
        tr.appendChild(tdLocation);

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
}

renderTable();

