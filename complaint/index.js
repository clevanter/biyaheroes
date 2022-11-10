const reportNo = document.getElementById('report-no');
const fullName = document.getElementById('complainant');
const submissionDate = document.getElementById('submission-date');
const driverName = document.getElementById('driver-name');
const todaName = document.getElementById('toda-name');
const bodyNo = document.getElementById('body-no');
const reportStatus = document.getElementById('status');
const violation = document.getElementById('violation');
const incidentDate = document.getElementById('incident-date');
const incidentDesc = document.getElementById('incident-detailed-desc');
const receivedBtn = document.getElementById('received-btn');
const resolvedBtn = document.getElementById('resolved-btn');
const contactNo = document.getElementById('contact');
const driverDesc = document.getElementById('desc');
const dateClosed = document.getElementById('closed-date');
const lostItem = document.getElementById('item');





// var myHtmlContent = [reportNo, fullName, todaName, bodyNo, reportStatus]
// var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

// var newRow = tableRef.insertRow(tableRef.insertRow(-1););
// var newCell = newRow.insertCell();


// newRow.innerText = myHtmlContent;

// const submittedDate = submissionDate;
// submissionDate.innerText = 'lumabas ka';
// submittedDate.innerText  = "nov";
// const submittedDate = submissionDate.innerText = "November";


// reportNo.innerText = '#1';
// submissionDate.innerText = 'November 1, 2022';
displayReport();
fullName.innerText = 'Franz Maaba';
submissionDate.innerText= '11/04/22';
contactNo.innerText = '+639291656681';
todaName.innerText = 'Dela Paz';
bodyNo.innerText = 'B101';
reportStatus;
driverName.innerText = 'Danilo Santos';
lostItem.innerText = 'umbrella';
incidentDate.innerText = '11/03/22';

dateClosed.innerText = '11/05/22';
violation.innerText = 'Overpricing';
driverDesc.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum metus sed ante pellentesque, vel fringilla tellus convallis. In augue orci, egestas id nisl sit amet, faucibus fringilla felis. Proin mollis eros nec arcu hendrerit interdum. Duis a auctor justo. In hac habitasse platea dictumst. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rhoncus orci nec libero malesuada malesuada. Sed lobortis tortor a blandit pretium. Aenean ac massa id felis tempor consequat. Phasellus ultrices felis orci, quis auctor sapien dignissim eget. Morbi pulvinar tempus laoreet. Vestibulum quis est scelerisque, blandit urna non, dapibus justo. Etiam leo risus, tincidunt id fermentum ac, suscipit vel nisl. Aliquam vitae arcu quis ante pellentesque ultricies. Integer tempor hendrerit pretium. Nullam nec est et erat vulputate pulvinar. Nam eu fringilla massa. Nunc a est et sapien sollicitudin finibus. Vivamus venenatis eros quis dolor dignissim sodales. Ut tristique accumsan leo. Nunc risus ligula, sodales sed laoreet at, finibus vel tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In vel est felis. Duis lobortis ullamcorper metus in interdum.';
incidentDesc.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis justo eu velit eleifend sodales. Sed lobortis dolor turpis. Aenean vitae justo non leo efficitur iaculis rhoncus in arcu. Sed ut felis in tortor semper dictum eu a quam. Nam magna lacus, accumsan quis dolor id, commodo ornare lorem. Aliquam vel eros pulvinar, pharetra diam vel, cursus lectus. Praesent et sapien gravida, tincidunt augue nec, convallis metus. Donec sit amet neque dui.';
// const reportSumDetails = [reportNo, fullName, todaName, bodyNo, reportStatus];

function displayReport(){
    reportNo.innerText = '#1';
}
reportNo = displayReport();



receivedBtn.addEventListener('click', displayReceived);

function displayReceived(){
    alert('The complainant will be notified.');
    receivedBtn.disabled = true;
}

resolvedBtn.addEventListener('click', displayConfirmation());

function displayConfirmation(){
    confirm('The report will now be move inside \'Solved Reports\' to proceed click OK.');
}




// submittedDate;

// function displaySubmitDate(){
//     if(submittedDate.value !== null){
//         return submittedDate.innerText = 'hi';
//     } else {
//         return null;
//     }
// }

// submissionDate = displaySubmitDate();

// const driverDesc = document.getElementById('driver-detailed-desc');
// for (let i = 0; i < driverDesc.length; i++) {
//     if (driverDesc[i].getAttribute('align') == 'center') {
//         console.log('paragraph' + i + 'centered')
//     }
// }





// const violationList = violation.innerText = violationList;

// function displayViolation(){
//     violationList = ['Overpricing', 'Di ko alam', 'Hehe'];

//     return violationList;
// }






// let submissionDate = new Date();
// let dd = String(today.getDate()).padStart(2, '0');
// let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// let yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);