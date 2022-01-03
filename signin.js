document.querySelector("button").addEventListener("click",signin);
    let reguser=JSON.parse(localStorage.getItem("details"));

    function signin(){
        let email=document.querySelector("#email").value;
        let password=document.querySelector("#password").value;

        if(email==="admin" && password==="admin"){
            alert("welcome admin")
        }
        else{
            for(var i=0;i<reguser.length;i++){
                if(reguser[i].emailId==email && reguser[i].pass==password){
                    window.location.href="menu.html";
                }
            }
            alert("login success")
        }
    }