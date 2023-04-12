const pass = document.querySelector("input[name='password']");
const passConfirm = document.querySelector("input[name='password-confirm']");
const passGroup = document.querySelector("p.password-group");

function checkPasswords(){
    return pass.value === passConfirm.value ? passGroup.classList.remove("error") : passGroup.classList.add("error"); 
};

pass.addEventListener("input", function(){checkPasswords()});
passConfirm.addEventListener("input", function(){checkPasswords()});
