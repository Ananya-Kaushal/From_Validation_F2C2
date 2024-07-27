
let form=document.getElementById("SignUpForm");
let email_box=document.getElementById("email");
let error1_box=document.getElementById("error1");
let password_box=document.getElementById("password");
let error2_box=document.getElementById("error2");
let btn=document.querySelector("button");

//btn.disabled();
email_box.addEventListener("change",validateEmail);

function validateEmail(e) {
    //e.preventDefault();
    let email=email_box.value;
    if(!email.includes("@") || !email.includes(".") || email.length<=3)
    {
        alert("Please, Fill all Feilds.");
    }
    else if(email.includes("@") && email.includes(".") && email.length>3){
        //validatePassword();
        error1_box.textContent="";
        
    }
}

password_box.addEventListener("change",validatePassword);

function validatePassword(e) {
    //e.preventDefault();
    let password=password_box.value;
    if(password.length<=8)
    {
        alert("Please, Fill all Feilds.");
    }
    else if(password.length>8 && error1_box.textContent==""){
        validateEmail();
        error2_box.textContent="All good to go!";
        error2_box.style.color="#219F35";
        //validateEmail();
    }
}

btn.addEventListener("click",validateForm);

function validateForm(e) {
    e.preventDefault();
    // console.log("Button Clicked");
    let email=email_box.value;
    let password=password_box.value;
    let e2=error2_box.value;

    //validateEmail();
    //validatePassword();

    if(email=="" || password.length<=8)
    {
        alert("Please, Fill all Fields.");
    }

    if(error2_box.textContent=="All good to go!")
    {
        if(confirm("Are you sure you want to sign up?"))
        {
            alert("Successful SignUp!");
            form.reset();

            error1_box.textContent="Make sure email is more than 3 characters and has @ and a .";
            error2_box.textContent="Make sure password is more than 8 characters.";
            error2_box.style.color="#FF0000";
        }
    }

}