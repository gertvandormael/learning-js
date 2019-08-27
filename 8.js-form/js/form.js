let log = console.log;
let myForm = document.getElementById("registerUser");
let formData = new FormData(myForm);
let submit = document.getElementById("submit");
let firstname = document.getElementById("firstname");
let input = document.querySelectorAll("input")
let error = document.querySelectorAll("div.error");
let passwordRegEx = new RegExp("(?=.*\d)(?=.*[A-Z]).{2,}");

submit.addEventListener("click", function(event){
    event.preventDefault();
    dataObject();
})

function dataObject() {
    let user = {};
    user.firstname = document.getElementById("firstname").value;
    user.lastname = document.getElementById("lastname").value;
    user.username = document.getElementById("username").value;
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password").value;
    user.confirmPassword = document.getElementById("confirmpassword").value;
    user.adress = document.getElementById("adress").value
    user.city = document.getElementById("city").value;
    user.zip = document.getElementById("zip").value;
    user.phone = document.getElementById("phone").value;
    user.age = document.getElementById("age").value;
    user.hobbies = document.getElementById("hobbies").value;
}

// Validation still very wip
for (let i = 0; i <= error.length; i++) {
    input[i].addEventListener("blur", function(){
        if (input[i].value === "") {
            error[i].innerHTML = "Please fill in this field"
        } else {
            error[i].className = "valid"
        }
    });
}

input[5].addEventListener("blur", function(){
    if (input[4] !== input[5]){
        error[5].innerHTML = "Password doesn't match";
    }
});
