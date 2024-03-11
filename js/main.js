function loadUsers() {
    fetch('/api/users').then(response => {
        response.json().then(users => {
            createTableRows('#users', users);
        })
    });
}

// createTableRow finds a table by the selector `table` and appends rows with the data from the `data` object
function createTableRows(table, data) {
    const tableElement = document.querySelector(table);
    if (!tableElement) {
        console.error(`Table with selector ${table} not found`);
        return;
    }

    const headers = [];

    tableElement.querySelectorAll('thead tr th').forEach(rowElement => {
        headers.push(rowElement.dataset.key);
    });

    const tableBody = document.querySelector(`${table} tbody`);

    // Clear the table body
    tableBody.innerHTML = '';

    data.forEach(dataItem => {
        // Create a new table row
        const newRow = document.createElement('tr');
        // Create a cell for each column in our table
        headers.forEach(header => {
            const newCell = document.createElement('td');
            newCell.textContent = dataItem[header];
            newRow.appendChild(newCell);
        });
        // Append the new row to the table body
        tableBody.appendChild(newRow);
    });
}
