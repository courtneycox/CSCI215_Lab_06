function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

}

function myAjaxFunction() {
    alert("Your Ajax has been made");
}
function checkName() {
    var regEx = new RegExp('\<');
    if(regEx.test(document.getElementById('name').value)) {
        document.getElementById('name').style.backgroundColor = 'red'
    }
    else {
        document.getElementById('name').style.backgroundColor = ''
    }
}
function checkAge() {
    var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
    var age = document.getElementById('age').value;
    if (regEx.test(age)) {
        console.log("Contains invalid characters" + document.getElementById('age').value);
        document.getElementById("age").style.backgroundColor="red";
    }
    else {
        document.getElementById('age').style.backgroundColor = ''
    }
}

function validate() {
   if (checkEmail(document.getElementById("email").value)) {
       myAjaxFunction();

       var inputs = document.getElementsByClassName('input');
       for (var i = 0; i < inputs.length; i++) {
           inputs[i].value = '';
       }
    } else {
        alert("Failed to validate. Please check enters information.")
       }
   }

