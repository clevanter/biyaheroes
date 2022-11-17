const reportNo = document.getElementById('report-no');
const submissionDate = document.getElementById('submission-date');
const complainant = document.getElementById('complainant');
const contact = document.getElementById('contact');
const driverName = document.getElementById('full-name');
const todaName = document.getElementById('toda-name');
const bodyNo = document.getElementById('body-no');
const violation = document.getElementById('violation');
const incidentDate = document.getElementById('incident-date');
const driverDesc = document.getElementById('driver-detailed-desc');
const incidentDesc = document.getElementById('incident-detailed-desc');
const resolvedBtn = document.getElementById('resolved-btn');
const receivedBtn = document.getElementById('received-btn');

receivedBtn.addEventListener('click', displayReceived());

function displayReceived(){
    alert('The complainant will be notified.');
    receivedBtn.disabled = true;
}

resolvedBtn.addEventListener('click', displayConfirmation());

function displayConfirmation(){
    confirm('The report will now be move inside \'Solved Reports\' to proceed click OK.');
}
// class Report {
//     constructor(reportNo){
//         this.reportNo = reportNo;
//     }

//     getInfo(){
//         return `${this.reportNo}`;
//     }
// }

// const report = new Report ('#1');
// console.log(report);
// function displayDetails(reportNo) {
//     reportNo.document.write = 1;
// }

// const report = {
//         reportID: 1,

// };

// function toEdit() {
//     save.style.visibility = "visible";
//       cancel.style.visibility = "visible";
//       edit.style.visibility = "hidden";

// function displayUpper(reportID) {
//     reportID.innerText;
// }

// console.log(displayUpper(1));

// const report = new Report (21);
// console.log(Report);
// console.log(reportDetails.(1,22,2,2));
