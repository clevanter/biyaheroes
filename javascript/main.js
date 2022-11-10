const pendingCount = document.getElementById('pending-count');
const solvedCount = document.getElementById('solved-count');
const overdueCount = document.getElementById('overdue-count');
const submissionDate = document.getElementById('submission-date');


//to be changed to db value
pendingCount.innerText = 92;
solvedCount.innerText = 22;
overdueCount.innerText = 12;
submissionDate.innerText = 12;


const reportID = document.getElementById('report-no');
reportID.value = 1;