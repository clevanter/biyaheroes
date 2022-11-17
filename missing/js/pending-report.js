// getting elements by their Id in HTML
const reportNo = document.getElementById('report-no');
const fullName = document.getElementById('complainant');
const contactNo = document.getElementById('contact');
const submissionDate = document.getElementById('submission-date');
const driverName = document.getElementById('driver-name');
const todaName = document.getElementById('toda-name');
const reportStatus = document.getElementById('status');
const bodyNo = document.getElementById('body-no');
const missingItem = document.getElementById('missing');
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
missingItem.innerText = 'Cellphone';
driverDesc.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum metus sed ante pellentesque, vel fringilla tellus convallis. In augue orci, egestas id nisl sit amet, faucibus fringilla felis. Proin mollis eros nec arcu hendrerit interdum. Duis a auctor justo. In hac habitasse platea dictumst. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rhoncus orci nec libero malesuada malesuada. Sed lobortis tortor a blandit pretium. Aenean ac massa id felis tempor consequat. Phasellus ultrices felis orci, quis auctor sapien dignissim eget. Morbi pulvinar tempus laoreet. Vestibulum quis est scelerisque, blandit urna non, dapibus justo. Etiam leo risus, tincidunt id fermentum ac, suscipit vel nisl. Aliquam vitae arcu quis ante pellentesque ultricies. Integer tempor hendrerit pretium. Nullam nec est et erat vulputate pulvinar. Nam eu fringilla massa. Nunc a est et sapien sollicitudin finibus. Vivamus venenatis eros quis dolor dignissim sodales. Ut tristique accumsan leo. Nunc risus ligula, sodales sed laoreet at, finibus vel tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In vel est felis. Duis lobortis ullamcorper metus in interdum.';
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