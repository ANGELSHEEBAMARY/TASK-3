let items = [];

function createForm() {
    document.querySelector('.create_form').style.display = 'block';
    document.querySelector('.update_form').style.display = 'none';
    document.querySelector('.addbtn').style.display = 'none';
}

function add() {
    const frockCode = document.querySelector('.create_form .frockcode').value;
    const frockName = document.querySelector('.create_form .frockname').value;
    const frockPrice = document.querySelector('.create_form .frockprice').value;
    if (frockCode && frockName && frockPrice) {
        items.push({ frockCode, frockName, frockPrice});
        document.querySelector('.create_form').reset();
        renderTable();
        document.querySelector('.create_form').style.display = 'none';
        document.querySelector('.addbtn').style.display = 'block';
    } else {
        alert('Please fill in all fields');
    }
}

function readAll() {
    renderTable();
}

function renderTable() {
    const tableData = document.querySelector('.table_data');
    tableData.innerHTML = '';

    items.forEach((item, index) => {
        const row = document.createElement('tr');

        const frockCodeCell = document.createElement('td');
        frockCodeCell.textContent = item.frockCode;
        row.appendChild(frockCodeCell);

        const frockNameCell = document.createElement('td');
        frockNameCell.textContent = item.frockName;
        row.appendChild(frockNameCell);
        
        const frockPriceCell = document.createElement('td');
        frockPriceCell.textContent = item.frockPrice;
        row.appendChild(frockPriceCell);

        const actionsCell = document.createElement('td');
        actionsCell.classList.add('actions');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => {
            document.querySelector('.update_id').value = index;
            document.querySelector('.update_form .frockcode').value = item.frockCode;
            document.querySelector('.update_form .frockname').value = item.frockName;
            document.querySelector('.update_form .frockprice').value = item.frockPrice;
            document.querySelector('.update_form').style.display = 'block';
            document.querySelector('.create_form').style.display = 'none';
            document.querySelector('.addbtn').style.display = 'none';
        });
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            items.splice(index, 1);
            renderTable();
        });
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);
        tableData.appendChild(row);
    });
}

function update() {
    const index = document.querySelector('.update_id').value;
    const frockCode = document.querySelector('.update_form .frockcode').value;
    const frockName = document.querySelector('.update_form .frockname').value;
    const frockPrice = document.querySelector('.update_form .frockprice').value;
    
    if (frockCode && frockName && frockPrice) {
        items[index] = { frockCode, frockName, frockPrice};
        document.querySelector('.update_form').reset();
        document.querySelector('.update_form').style.display = 'none';
        document.querySelector('.addbtn').style.display = 'block';
        renderTable();
    } else {
        alert('Please fill in all fields');
    }
}
