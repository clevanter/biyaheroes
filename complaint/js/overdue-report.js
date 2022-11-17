// getting elements by their Id in HTML
const reportNo = document.getElementById('report-no');
const fullName = document.getElementById('complainant');
const contactNo = document.getElementById('contact');
const submissionDate = document.getElementById('submission-date');
const driverName = document.getElementById('driver-name');
const todaName = document.getElementById('toda-name');
const reportStatus = document.getElementById('status');
const bodyNo = document.getElementById('body-no');
const violation = document.getElementById('violation');
const incidentDate = document.getElementById('incident-date');
const driverDesc = document.getElementById('driver-desc');
const incidentDesc = document.getElementById('incident-detailed-desc');


// displayReport();

// innerText - used to display the value directly on HTML
reportNo.innerText = 1;
fullName.innerText = 'Franz Maaba';
bodyNo.innerText = 'B101';
contactNo.innerText = '+639291656681';
submissionDate.innerText= '11/04/22';
todaName.innerText = 'Dela Paz';
bodyNo.innerText = 'B101';
driverName.innerText = 'Danilo Santos';
incidentDate.innerText = '11/03/22';
violation.innerText = 'Overpricing';
driverDesc.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis justo eu velit eleifend sodales. Sed lobortis dolor turpis. Aenean vitae justo non leo efficitur iaculis rhoncus in arcu. Sed ut felis in tortor semper dictum eu a quam. Nam magna lacus, accumsan quis dolor id, commodo ornare lorem. Aliquam vel eros pulvinar, pharetra diam vel, cursus lectus. Praesent et sapien gravida, tincidunt augue nec, convallis metus. Donec sit amet neque dui.';
incidentDesc.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis justo eu velit eleifend sodales. Sed lobortis dolor turpis. Aenean vitae justo non leo efficitur iaculis rhoncus in arcu. Sed ut felis in tortor semper dictum eu a quam. Nam magna lacus, accumsan quis dolor id, commodo ornare lorem. Aliquam vel eros pulvinar, pharetra diam vel, cursus lectus. Praesent et sapien gravida, tincidunt augue nec, convallis metus. Donec sit amet neque dui.';

// SAMPLE FUNCTION TO DISPLAY VALUE
// function displayReport(){
//     reportNo.innerText = '#1';
// }
// reportNo = displayReport();

receivedBtn.addEventListener('click', displayReceived());

function displayReceived(){
    alert('The complainant will be notified.');
    document.getElementById('received-btn').disabled = true;
}

resolvedBtn.addEventListener('click', displayConfirmation());

function displayConfirmation(){
    confirm('The report will now be move inside \'Solved Reports\' to proceed click OK.');
}
