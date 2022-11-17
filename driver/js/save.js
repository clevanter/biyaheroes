const save = document.getElementById('save');
const inputBodyNo = document.getElementById('input-body-no')
const newBodyNo = document.getElementById('new-body-no');
const inputDriverName = document.getElementById('input-driver-name');
const newDriverName = document.getElementById('new-driver-name');
const inputSelect = document.getElementById('inputGroupSelect01');
const newTodaName = document.getElementById('new-toda-name');

save.addEventListener('click', saveNew);

function saveNew(){

    if (confirm('Are you sure you want to add this new row? If yes select \'OK\', if not select \'CANCEL\'')){
        newTodaName.innerText = inputSelect.value;
        newBodyNo.innerText = inputBodyNo.value;
        newDriverName.innerText = inputDriverName.value
        document.getElementById('new-input').style.display='none';
        document.getElementById('new-btn').style.display='flex';
    } else {
        return save.addEventListener('click', saveNew);
    }

}
