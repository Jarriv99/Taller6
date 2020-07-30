function submitEdad() {
    var Bdate = document.getElementById('Edad').value;
    var Bday = +new Date(Bdate);
		Bdate =  ~~ ((Date.now() - Bday) / (31557600000)) + " Años";
    var theBday = document.getElementById('Resultado');
    theBday.innerHTML = Bdate;
}
function PassValidation(){
	var pass = document.getElementById("pass");
    var passconfirm = document.getElementById("confirmpass");
    if (pass.value == passconfirm.value) {
        document.getElementById("invalid-pass").style.display = "none";
    } else {
        document.getElementById("invalid-pass").style.display = "block";
        passconfirm.value = '';
    };
    
}
function VerMas1() {
    element1 = document.getElementById("show1");
    check1 = document.getElementById("customSwitch");
    if (check1.checked) {
        element1.style.display='block';
    }
    else {
        element1.style.display='none';
    }
}
function VerMas2() {
    element2 = document.getElementById("show2");
    check2 = document.getElementById("customSwitch1");
    if (check2.checked) {
        element2.style.display='block';
    }
    else {
        element2.style.display='none';
    }
}
