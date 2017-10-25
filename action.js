function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

}

function myAjaxFunction() {
    alert("Your Ajax has been made")
    document.getElementsByClassName("subform").reset()
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
        document.getElementById('age').style.backgroundColor = ''
    }
    else {
        document.getElementById('age').style.backgroundColor = ''
    }
}

function validate() {
    var validate = checkEmail(document.getElementById(email).value)
    console.log(valid)
    if(valid == true) {
        myAjaxFunction()
    }
    else {
        alert("The information is not correct, please check it")
    }
}
