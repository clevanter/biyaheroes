let table = document.getElementById('myTable-th');
// let cells = table.getElementsByTagName('td');
let cells = document.getElementsByClassName('input-data');

//for loop para madaanan lahat ng cells na may class name na input-data
for (var i = 0; i < cells.length; i++) {

  cells[i].onclick = function(){
    if (this.hasAttribute('data-cliked')) {
      return;
    }

    //validates if the user clicked the existing text or yung line
    this.setAttribute('data-clicked', 'yes');
    this.setAttribute('data-text', this.innerText);

    //once na click ng user yung line or cell this well served as the input form
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.value = this.innerText;
    input.style.width = this.offsetWidth - (this.clientLeft * 2) + 'px';
    input.style.height = this.offsetHeight - (this.clientTop * 2) + 'px';
    input.style.border = '0px';
    input.style.fontFamily = 'inherit';
    input.style.fontSize = 'inherit';
    input.style.textAlign = 'inherit';

    //console checking only, sinama ko lang siya kasi nasa tutorial :D
    input.onblur = function(){
      let td = input.parentElement;
      let orig_text = input.parentElement.getAttribute('data-text');
      let current_text = this.value;

      if (orig_text != current_text){
        //this condition checks if there is a change between the original and current text
        // this can be saved to db with the help of ajax

        td.removeAttribute('data-clicked');
        td.removeAttribute('data-text');
        td.innerText = current_text;
        // td.style.cssText = 'padding'
        console.log(orig_text + ' is changed to ' + current_text)
      } else {
        td.removeAttribute('data-clicked');
        td.removeAttribute('data-text');
        td.innerText = orig_text;
        // td.style.cssText = '';
        console.log('No Changes Made');
      }
    }

    //this serves as the display style once na nalagay na ng user yung bagong value
    input.onkeypress = function(){
      if (event.keyCode == 13){
        this.blur();
      }
    }
    this.innerText = '';
    this.style.cssText = 'padding: 10px 10px';
    this.append(input);
    this.firstElementChild.select();

  }
}
