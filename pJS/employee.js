window.addEventListener('load', function () {
    var Empname = document.getElementById('names');
    var EmpInfo = document.getElementById('Emp');
    var monthRep = document.getElementById('monthRep');
    var dailyRep = document.getElementById('dailyRep');
    var usName = window.localStorage.username
    var emp;
    let _url = "employee.json";
    $.ajax({
        url: _url,
        type: "get",
        success: function (data) {
            var emptbl = document.createElement('table');
            var monthReptbl = document.createElement('table');
            var dailyReptbl = document.createElement('table');
            emp = data;
            for (var i = 0; i < emp.length; i++) {
                if (usName == emp[i].UserName) {
                    Empname.innerText = emp[i].FirstName + " " + emp[i].LastName;
                    var tr = "<tr><th> Name </th><td >" + emp[i].FirstName + " " + emp[i].LastName + "</td></tr><tr><th> Address</th><td>" + emp[i].Address + "</td></tr><tr><th> Age</th><td>" + emp[i].Age + "</td></tr><tr><th> Email </th><td>" + emp[i].Email + "</td></tr>"
                    var monthtr = "<tr><th> Name </th><td >" + emp[i].FirstName + " " + emp[i].LastName + "</td></tr><tr><th> Attendance</th><td>" + emp[i].times + "</td></tr><tr><th> Lates</th><td>" + emp[i].lates + "</td></tr><tr><th> Absent </th><td>" + emp[i].absent + "</td></tr>"
                    var dailytr = "<tr><th> Name </th><td >" + emp[i].FirstName + " " + emp[i].LastName + "</td></tr><tr><th> Attendance Time</th><td>" + emp[i].attandance + "</td></tr><tr><th> Statue Today </th><td>" + emp[i].today + "</td></tr>";
                }
            }
            emptbl.innerHTML += tr;
            monthReptbl.innerHTML += monthtr;
            dailyReptbl.innerHTML += dailytr;


            emptbl.className += "table table-striped table-bordered"
            monthRep.className += "table table-striped table-bordered"
            dailyRep.className += "table table-striped table-bordered"

            EmpInfo.append(emptbl);
            monthRep.append(monthReptbl);
            dailyRep.append(dailyReptbl);
        }
    })



});  