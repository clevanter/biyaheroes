const reportNo = document.getElementById('report-no');
const fullName = document.getElementById('complainant');
const driverName = document.getElementById('driver-name');
const todaName = document.getElementById('toda-name');
const bodyNo = document.getElementById('body-no');
const reportStatus = document.getElementById('status');
let newData;
let input = document.getElementsByTagName('input')
const searchBtn = document.getElementsByClassName('search-icon');

function addRow(){
    let myTable = document.getElementById('myTable').getElementsByTagName('tbody')[0];

    let row = myTable.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = 2;
    cell2.innerHTML = 'JAHID';
    cell3.innerHTML = 23;
    cell4.innerHTML = '121';
    cell5.innerHTML = 'Pending';
    cell6.innerHTML = '<a href="complaint-pending-report.html"><button class="btn btn-outline-dark btn-sm view-btn">View</button></a>';
}

// function na magsasabi if new data has been received by returning 'true'

    const anotherRow = 'true';

    if (anotherRow == 'true'){
        addRow();
    }

searchBtn.addEventListener('click', searchThis());

function searchThis(){

    let firstResult = text.match(input);

    if(input == firstResult){
        alert('show this');

    }

}

function toSearch(){
    document.getElementsByClassName('search-icon');
}

