var fName = document.getElementById('fName');
var lName = document.getElementById('lName');
var address = document.getElementById('Address');
var  email = document.getElementById('email');
var age = document.getElementById('age');

var flage = true;
var obj = {
    emp: []
};
export function getData() {
    var xhr = new XMLHttpRequest();

    xhr.open("get", "employee.json");

    xhr.onload = function () {
        obj = JSON.parse(xhr.responseText);
        AddnewEmp();
        SaveData(obj);
    }
    xhr.send();

}

function AddnewEmp() {
   var emp = {
        "FirstName": fName.value,
        "LastName": lName.value,
        "Address": address.value,
        "Email": email.value,
        "Age": age.value,
        "UserName": fName.value.substring(0, 3) + Math.floor(Math.random() * 100 * 6),
        "password": lName.value.substring(0, 3) + Math.floor(Math.random() * 100 * 6),
        "attandance": "0",
        "times": 0,
        "lates": 0,
        "absent": 0,
        "flage": false,
    }
    console.log(obj);
    obj.push(emp);
}
 export function SaveData(obj) {
    console.log(obj);
    var _StoreData = new Blob([JSON.stringify(obj)], { type: "appliction/json" });
    var Linkelement = document.createElement("a");
    Linkelement.href = window.webkitURL.createObjectURL(_StoreData);
    Linkelement.setAttribute("download", "employee.json");
    //append link
    document.body.appendChild(Linkelement);
    //click fire
    Linkelement.click();
    document.body.removeChild(Linkelement);

}
