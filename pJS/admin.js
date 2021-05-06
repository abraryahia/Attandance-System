    var _url = "employee.json";
    var emp=[];
window.addEventListener('load', function () {
  
      getdata();
     
});
function getdata(){
    var AllEmp = document.getElementById('Emp');
    var fullRep = document.getElementById('fullRep');
    var attendRep = document.getElementById('attendRep');
    var lateRep = document.getElementById('lateRep');
    var absent = document.getElementById('AbsentRep');
    var request = document.getElementById('empReq');
    $.ajax({
    url: _url,
    type: "get",
    success: function (data) {
        emp = data;
        var emptbl = document.createElement('table');
        var empth = "<tr><th> Name </th><th> Age </th><th> Address </th><th> Email</th></tr> "
        emptbl.innerHTML += empth;
        var fullReptbl = document.createElement('table');
        var fullth = "<tr><th> Name </th><th> Time </th><th> Attend </th><th> Late</th><th> Absent</th></tr> "
        fullReptbl.innerHTML += fullth;
        var attendReptbl = document.createElement('table');
        var attendth = "<tr><th> Name </th><th> Absent</th></tr> "
        attendReptbl.innerHTML += attendth;
        var lateReptbl = document.createElement('table');
        var lateth = "<tr><th> Name </th><th> Late</th></tr> "
        lateReptbl.innerHTML += lateth;
        var absentReptbl = document.createElement('table');
        var absentth = "<tr><th> Name </th><th> Absent</th></tr> "
        absentReptbl.innerHTML += absentth;
        var Requesttbl = document.createElement('table');
        Requesttbl.setAttribute('id', 'Requesttbl')
        var reqth = "<tr><th> Name </th><th> Age </th><th> Address </th><th> Email</th><th></th><th></th></tr> "
        Requesttbl.innerHTML += reqth;
        for (var i = 0; i < emp.length; i++) {
            if (emp[i].flage == true && emp[i].UserName != "Admin") {
                console.log(emp[i]);
                var emptr = "<tr><td >" + emp[i].FirstName + " " + emp[i].LastName + "</td><td>" + emp[i].Age + "</td><td>" + emp[i].Address + "</td><td>" + emp[i].Email + "</td><tr>";
                emptbl.innerHTML += emptr;
                var fulltr = "<tr><td >" + emp[i].FirstName + " " + emp[i].LastName + "</td><td>" + emp[i].attandance + "</td><td>" + emp[i].times + "</td><td>" + emp[i].lates + "</td><td>" + emp[i].absent + "</td><tr>";
                fullReptbl.innerHTML += fulltr;
                if (emp[i].today == "attend") {
                    console.log(emp[i]);
                    var attendtr = "<tr><td >" + emp[i].FirstName + " <td>" + emp[i].today + "</td></tr>"
                    attendReptbl.innerHTML += attendtr;
                }
                else if (emp[i].today == "late") {
                    console.log(emp[i]);
                    var latetr = "<tr><td >" + emp[i].FirstName + " <td>" + emp[i].today + "</td></tr> ";
                    lateReptbl.innerHTML += latetr;
                }
                else if (emp[i].today == "absent") {
                    console.log(emp[i]);
                    var absenttr = "<tr><td >" + emp[i].FirstName + " <td>" + emp[i].today + "</td></tr>"
                    absentReptbl.innerHTML += absenttr;
                }
            }
            else if (emp[i].flage == false) {
                console.log('request', emp[i])
                var reqtr = "<tr><td >" + emp[i].FirstName + " " + emp[i].LastName + "</td><td>" + emp[i].Age + "</td><td>" + emp[i].Address + "</td><td>" + emp[i].Email + "</td><td><input type='button' value='Accept' id='btnaccept' class='btn ' onclick='acceptEmp("+i+")'>  </td><td><input type='button' value='Reject' id='btndelete' class='btn btn-danger' onclick='rejectEmp("+i+")'> </td></tr>";
                Requesttbl.innerHTML += reqtr;

            }
        }

        emptbl.className += "table "
        AllEmp.append(emptbl);

        fullReptbl.className += "table "
        fullRep.append(fullReptbl);

        attendReptbl.className += "table "
        attendRep.append(attendReptbl);


        lateReptbl.className += "table "
        lateRep.append(lateReptbl);

        absentReptbl.className += "table "
        absent.append(absentReptbl);

        Requesttbl.className += "table  "
        Requesttbl.setAttribute('id','Requesttbl')
        // var savebtn = document.createElement('input');
        // savebtn.setAttribute('id', 'save')
        // savebtn.setAttribute('type', 'button')
        // savebtn.setAttribute('class', 'btn')
        // savebtn.setAttribute('value', 'save')
        request.append(Requesttbl);
       // request.append(savebtn);
       
        console.log('donee')
       
    },
    error: function err() {
        console.log("Error Mesage!!");
    }


});}  
function acceptEmp(no){
        var empObj = emp[no];
        empObj.flage = true;
        console.log(empObj);
        emp.splice(no, 1, empObj);
        console.log(emp);
        //SaveData(emp)
}
 


function rejectEmp(no){
        emp.splice(no, 1);
        console.log(emp);
       // SaveData(emp)
}

function SaveData() {
    var _StoreData = new Blob([JSON.stringify(emp)], { type: "appliction/json" });
    var Linkelement = document.createElement("a");
    Linkelement.href = window.webkitURL.createObjectURL(_StoreData);
    Linkelement.setAttribute("download", "employee.json");
    document.body.appendChild(Linkelement);
    Linkelement.click();
    document.body.removeChild(Linkelement);
}

