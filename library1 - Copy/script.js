

    
    const form = document.getElementById("form");
    const myForm = document.getElementById("myForm"); 
    const fname = document.getElementById("fname");
    const last = document.getElementById("last");
    const cell = document.getElementById("cell");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    const img = document.getElementById("img");

    //check errors for registration
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        errorCheck();
    });

    
    /////////////////////////////////////////registration section ///////////////////////////////////////////////////////////////////////

    function errorCheck(){
        
        //validating values
        const fnameV = fname.value.trim();
        const lastV = last.value.trim();
        const cellV = cell.value.trim();
        const emailV = email.value.trim();
        const passV = pass.value.trim();
        const imgV = img.value.trim();


        
         if (fnameV == ""){
            setError(fname,"please enter your firstname");
         }else if(lastV == ""){
            setError(last,"please enter your last name");
         }else if(cellV == ""){
            setError(cell,"please enter your cell number");
         }else if(!cellV.match(/^\d+/)){
            setError(cell,"please enter valid nummber");
         }else if(cellV.length <= 10){
            setError(cell,"Cell number should be atleast 10 digits");
         }else if(emailV == ""){
            setError(email,"please enter your Email Address");
        }else if(passV == ""){
            setError(pass,"please enter your Password");
        }else if(passV.length <= 8 ){
            setError(pass,"password should have atleast 8 digits");
        }else if(passV.match("/[a-z]/g")){
            setError(pass,"your password must contain at least one lower case");
        }else if(passV.match("/[1-9]/g")){
            setError(pass,"must contain atleast one numerical digit");
        }else if(passV.match("/[A-Z]/g")){
            setError(pass,"must contain atleast one uppercase");
        }else if(imgV == ""){
            setError(img,"please enter your firstname")
         }else{
             successFunction(fname,last,cell,email,pass,img);
             
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
    function successFunction(e1,e2,e3,e4,e5,e6){
        const c1 = e1.parentElement;
        const c2 = e2.parentElement;
        const c3 = e3.parentElement;
        const c4 = e4.parentElement;
        const c5 = e5.parentElement;
        const c6 = e6.parentElement;

        

        //check if the class list of elements contain errors
        if(c1.classList.contains('error')||c2.classList.contains('error')||c3.classList.contains('error')||c4.classList.contains('error')||c5.classList.contains('error')||c6.classList.contains('error')){
            //control.classList.remove('error');
            c1.classList.remove('error');
            c2.classList.remove('error');
            c3.classList.remove('error');
            c4.classList.remove('error');
            c5.classList.remove('error');
            c6.classList.remove('error');
            //after validating move to save functio 
           
            
    } existing();
}

    function existing(){

        let fname = document.getElementById("fname").value;
        let email = document.getElementById("email").value;

        let strArray = localStorage.getItem("users");

        let items = JSON.parse(strArray);

        let flag = false;
        for(let i = 0; i<items.length; i++){
            if(items[i].name === fname && items[i].email === email){
                flag = true;
               // break;
            }
        }
        if (flag === true){
            alert("Already have an account please login or re-check your credentials");
        }else{
            save();
        }
    }


    function save(){
        class users {
            constructor(_name, last, cell, email, pass, img) {
                this.name = _name;
                this.last = last;
                this.cell = cell;
                this.email = email;
                this.pass = pass;
                this.img = img;
            }

        
        }
        const fname = document.getElementById("fname").value;
        const last = document.getElementById("last").value;
        const cell = document.getElementById("cell").value;
        const email = document.getElementById("email").value;
        const pass = document.getElementById("pass").value;
        const img = document.getElementById("img").value;

        let user = new users(
            fname,
            last,
            cell,
            email,
            pass,
            img,
        );

        let people = [];

        people.push(user);

        localStorage.setItem("users", JSON.stringify(people));
        alert("successfully registered");
        window.location.href ="index.html";

    }
  


