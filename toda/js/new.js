//hides the input form nung add button
//pag loading ng page naka hide
document.getElementById('new-input').style.display='none';

let a;

function showInputForm(){
    if(a === 1){

        //once na napindot ng user ADD button mahihide na siya
        document.getElementById('new-btn').style.display='none';

        //then the input form will display
        document.getElementById('new-input').style.display='flex';
        return a = 0;
    }

    else {
        document.getElementById('new-input').style.display='none';
        return a = 1;
    }
}


