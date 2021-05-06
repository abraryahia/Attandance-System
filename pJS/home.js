import { getData  } from './conJSON.js'
window.addEventListener('load', function () {
   var  UName = document.getElementById('UserName');
   var  Pass = document.getElementById('pass');
   var emp ;
let _url = "employee.json";

$.ajax({
    url: _url,
    type: "get",
    success: function (data) {
        emp = data;}
    })
function checkUser() {
   for (var i = 0; i < emp.length; i++) {
     if (emp[i].UserName==UName.value && emp[i].password==pass.value && emp[i].flage == true ) {
       return true;
     }
   }
 }
    //Go to profile page 
    (function () {
        var forms = document.querySelectorAll('.needs-validation')
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    else {
                       
                            // Save data to sessionStorage 
                           
                        if (this.id == 'logForm' ) {
                            if(checkUser()){
                                window.localStorage.setItem('username',UName.value);
                            if (pass.value == "admin12" && UName.value=="Admin") {
                                this.action = "admin.html";
                                this.submit();
                            }
                            else if (pass.value == "supemp123" && UName.value=="SubAdmin" ) {

                                this.action = "subAdmin.html";
                                alert('Welcome Back')
                                this.submit();

                            }
                            else{
                                this.action = "employee.html";
                                alert('Welcome Back')
                                this.submit();
                            }
                        }

                            else {
                                alert('This user name or password not right ,plz try again')
                            }

                        }
                        else {
                            getData();
                        }
                        
                    }
                    form.classList.add('was-validated')
                }, false)
            })
    })()
})
