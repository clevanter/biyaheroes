// getting elements by their Id in HTML
const reportNo = document.getElementById('report-no');
const fullName = document.getElementById('complainant');
const contactNo = document.getElementById('contact');
const closedDate = document.getElementById('closed-date')
const submissionDate = document.getElementById('submission-date');
const driverName = document.getElementById('driver-name');
const todaName = document.getElementById('toda-name');
const reportStatus = document.getElementById('status');
const bodyNo = document.getElementById('body-no');
const violation = document.getElementById('violation');
const incidentDate = document.getElementById('incident-date');
const driverDesc = document.getElementById('driver-desc');
const incidentDesc = document.getElementById('incident-desc');


// displayReport();

// innerText - used to display the value directly on HTML
reportNo.innerText = 1;
fullName.innerText = 'Franz Maaba';
bodyNo.innerText = 'B101';
contactNo.innerText = '+639291656681';
submissionDate.innerText= '11/04/22';
closedDate.innerText = '11/05/22';
todaName.innerText = 'Dela Paz';
bodyNo.innerText = 'B101';
driverName.innerText = 'Danilo Santos';
incidentDate.innerText = '11/03/22';
violation.innerText = 'Overpricing';
driverDesc.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a auctor justo. In hac habitasse platea dictumst. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis lobortis ullamcorper metus in interdum.';
incidentDesc.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis justo eu velit eleifend sodales. Sed lobortis dolor turpis. Aenean vitae justo non leo efficitur iaculis rhoncus in arcu. Sed ut felis in tortor semper dictum eu a quam. Nam magna lacus, accumsan quis dolor id, commodo ornare lorem. Aliquam vel eros pulvinar, pharetra diam vel, cursus lectus. Praesent et sapien gravida, tincidunt augue nec, convallis metus. Donec sit amet neque dui.';

// SAMPLE FUNCTION TO DISPLAY VALUE
// function displayReport(){
//     reportNo.innerText = '#1';
// }
// reportNo = displayReport();
