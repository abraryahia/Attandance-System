window.addEventListener('load', function () {
    username = document.getElementById('userName');
    usernamespan = document.getElementById('spantxt');
    save = document.getElementById('saves');
    confirms = document.getElementById('confirm');
    usernames = document.getElementById('em');
    attan = document.getElementById('ff');


    let emp = [];
    let _url = "employee.json";

    $.ajax({
        url: _url,
        type: "get",
        success: function (data) {
            emp = data;
        },
        error: function err() {
            console.log("Error Mesage!!");
        }
    });


    $("#confirm").click(function () {
        var date = new Date();
        var hours = date.getHours();
        var min = date.getMinutes();
        // var sec = date.getSeconds();
        console.log(hours + ":" + min);
        for (var i = 0; i < emp.length; i++) {
            if (username.value == emp[i].UserName && emp[i].flage == true) {
                emp[i].attandance = hours + ":" + min;
                // var countlate = parseInt(arr[i].lates);
                // var countabsant = arr[i].absent;
                if (hours <= '9') {
                    emp[i].times++;
                    emp[i].today ="attend"
                }
                else if (hours == '11' && min <= '15') {
                    emp[i].lates++;
                    emp[i].today ="late"

                }
                else {
                    emp[i].absent++;
                    emp[i].today ="absent"
                }
                console.log(emp);
            }
        }
        show();

        const obj = {
            "username": username.value
        };

        console.log(obj);

        sessionStorage.setItem('uusername', JSON.stringify(obj));
    });//end of confirm attandance

    console.log(emp);
    // show button
    function show() {
        for (var i = 0; i < emp.length; i++) {
           // debugger;
            if (emp[i].UserName == username.value && emp[i].flage == true) {
                usernames.value = emp[i].FirstName + " " + emp[i].LastName;
                attan.value = emp[i].attandance;
               confirms.setAttribute("href", "#myModal") 
               return;
            }

        };
        

                confirms.setAttribute("href", "#modalMsg" ) 
    };

    save.addEventListener('click', function () {

        console.log(emp);
        var _StoreData = new Blob([JSON.stringify(emp)], { type: "appliction/json" });
        var Linkelement = document.createElement("a");
        Linkelement.href = window.webkitURL.createObjectURL(_StoreData);
        Linkelement.setAttribute("download", "employee.json");
        document.body.appendChild(Linkelement);
        Linkelement.click();
        document.body.removeChild(Linkelement);
    });

});//end of load