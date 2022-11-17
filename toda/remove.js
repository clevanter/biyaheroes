//not sure if fully nag fufunction
const remove = document.getElementById('delete-icn');

remove.addEventListener('click', toRemove);

function toRemove(){
    document.getElementById('myTable-th').deleteRow('click');
    console.log('CLICKED');

}
