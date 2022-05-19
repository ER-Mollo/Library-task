
const myForm = document.getElementById("myForm"); 
const fname = document.getElementById("fname");
const pass = document.getElementById("pass");

//check errors for login
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    login();
});
//////////////////////////////////////////////login///////////////////////////////////////////////////////////////////
function login(){


    //validating values
    const fnameV = fname.value.trim();
    const passV = pass.value.trim();

    
     if (fnameV == ""){
        setError(fname,"please enter your firstname");
     }else if(passV == ""){
        setError(pass,"please enter your password");
    }else{
         successFunction(fname,pass);
     }
    }

function setError(element, message){
    let control = element.parentElement;
    if(control.classList.contains('success')){
        control.classList.remove('success');
    }
    control.classList.add('error');
    const small = control.querySelector('small');
    small.textContent = message;
    //control.classList.remove('error');


}
function successFunction(e1,e2){
    const c1 = e1.parentElement;
    const c2 = e2.parentElement;

    //check if the class list of elements contain errors
    if(c1.classList.contains('error') || c1.classList.remove('error')){
        c1.classList.remove('error');
        c2.classList.remove('error');
        
    }
    // else{
        //after validating move to save functio
        check();
        // window.location.href="board.html";
        
}

function check(){
    let fname = document.getElementById("fname").value;
    let pass = document.getElementById("pass").value;

    let strArray = localStorage.getItem("users");

    let items = JSON.parse(strArray);

    let flag = false;
    for(let i = 0; i<items.length; i++){
        if(items[i].name === fname && items[i].pass === pass){
            flag = true;
            break;
        }
    }
    if (flag === true){
        alert("Successful login");
        window.location.href="board.html";
    }else{
        alert("please enter valid login details");
    }

}




// document.getElementById("reg").style.display = "none";

// function reg(){
//     document.getElementById("login").style.display = "none"; 
//     document.getElementById("reg").style.display = "flex";
// }