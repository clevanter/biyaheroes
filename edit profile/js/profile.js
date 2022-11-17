const edit = document.getElementById('edit')
const save = document.getElementById('save');
const cancel = document.getElementById('cancel');
const inputs = document.getElementsByClassName('form-control');

const fullName = document.getElementById('full-name');
const role = document.getElementById('role');
const email = document.getElementById('email');
const password = document.getElementById('password');

const defaultFullName = fullName.value = "Hannah Liwanag";
const defaultRole = role.value = "0912345";
const defaultEmail = email.value = "andy@yopmail.com";
const defaultPassword = password.value = "root";

edit.addEventListener('click', toEdit);
cancel.addEventListener('click', cancelEdit);
save.addEventListener('click', saveEdit);

function toEdit() {
    save.style.visibility = "visible";
    cancel.style.visibility = "visible";
    edit.style.visibility = "hidden";

	for(const input of inputs) {
        input.readOnly = false;
  }
}

function cancelEdit() {
    //returns the default name
      fullName.value = defaultFullName;
      role.value = defaultRole;
      email.value = defaultEmail;
      password.value = defaultPassword;

        edit.style.visibility = "visible";
        save.style.visibility = "hidden";
        cancel.style.visibility = "hidden";
      
        for(const input of inputs) {
          input.readOnly = true;
      }
    }

    function saveEdit() {
        if(fullName.value==='' || role.value==='' || email.value==='' || password.value==='') {
          console.log("Empty field");
      } else {
          const newFullName = document.getElementById('full-name').value;
          const newRole = document.getElementById('role').value;
          const newEmail = document.getElementById('email').value;
          const newPassword = document.getElementById('password').value;

          fullName.value = newFullName;
          role.value = newRole;
          email.value = newEmail;
          password.value = newPassword;

        
        edit.style.visibility = "visible";
        save.style.visibility = "hidden";
        cancel.style.visibility = "hidden";
    
        for(const input of inputs) {
          input.readOnly = true;
        }
      }
    }