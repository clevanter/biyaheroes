const pendingCount = document.getElementById('pending-count');
const solvedCount = document.getElementById('solved-count');
const overdueCount = document.getElementById('overdue-count');


//to be changed to db value
//nag lagay muna ako ng math floor para random yung nalabas na number
pendingCount.innerText = Math.floor(Math.random() * 100);
solvedCount.innerText = Math.floor(Math.random() * 100);
overdueCount.innerText = Math.floor(Math.random() * 100);
