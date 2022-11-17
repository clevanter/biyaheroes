//saves the input of the new toda member

const save = document.getElementById('save');
const inputPresName = document.getElementById('input-pres-name');
const newPresident = document.getElementById('new-president-name');
const inputSelect = document.getElementById('inputGroupSelect01');
const newTodaName = document.getElementById('new-toda-name');

save.addEventListener('click', saveNew);

function saveNew(){

    //yung pinaka form naka hide sa add button na nasa new.js
    //this function will be used a validation na kapag pinindot ng user ang OK sa confirm box?
    //mag ididisplay niya yung ininput ng user pero pag cancel lalabas lang ulit

    if (confirm('Are you sure you want to add this new row? If yes select \'OK\', if not select \'CANCEL\'')){
        
        //lahat ng may input meaning galing sa form mismo them yung may new doon ididisplay
        newPresident.innerText = inputPresName.value;
        newTodaName.innerText = inputSelect.value;

        //hides the ADD button kapag napindot na para lang malinis
        document.getElementById('new-input').style.display='none';

        //then ididisplay na once napindot na yung SAVE
        document.getElementById('new-btn').style.display='flex';
    } else {
        
        return save.addEventListener('click', saveNew);
    }
}
