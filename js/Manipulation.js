//any creation functions
$(function () {
    //any selector code
    //    var allLIO= document.getElementsByTagName("li");
    //    for(var i=0;i<allLIO.length;i++){
    //        allLIO[i].onclick=function(){
    //            console.log(this.innerHTML);
    //        }
    //    }
    // prop
    ///===
    // as fun
    // $("li").click(function () {
    //     console.log($(this).text());
    // });
    // $("li").mouseover(function () {
    //     // $(this).addClass("active");
    //     // if ($(this).hasClass("active"))
    //     //     $(this).removeClass("active")
    //     // else
    //     //     $(this).addClass("active")
    //     $(this).toggleClass("active");
    // })
    $("li").hover(function () {
        $(this).toggleClass("active");
    })
    //selector.style.display="none"
    // $("li").hide(2000).show(2000)
    // $("li:last").hide(2000).show(2000);

    //Manpulations
    //append //appendto/prpend/preprend/after,befor,insertafter,insertbefore
    //string ,htmlstring ,jqobject ,js elemnt
    $("#qaddingNewEL").click(function () {
        //string 
        var mystr = "new string elemnts";
        // $("#example").append(mystr);
        var HTMLstr = "<p style='background-color:lightgreen;color:red'>new parag</p>";
        // $("#example").append(HTMLstr);
        // var JSEl = document.createElement("p");
        // JSEl.style.backgroundColor = "red";
        // JSEl.innerText = "JS parag Elemen";
        // JSEl.onclick = function () {
        //     alert("fff");
        // }
        // $("#example").append(JSEl);
        //child & parent 
        var firstLI = $("li:first");
        // $("#example").append(firstLI);//cutting JSSelctor 
        // $("#example").append(firstLI.clone(true)); //copy with events
        //  firstLI.appendTo($("#example")); 
        // $("#example").prepend(firstLI);
        // firstLI.prependTo($("#example"));
        //Siblings 
        // $("#example").after(firstLI);
        // $("#example").before(firstLI);
        // firstLI.insertAfter($("#example"));
        firstLI.insertBefore($("#example"));
    });
    $("#example").hover(function () {
        console.log($(this));
        $(this).toggleClass("active");
    })
    $("#RemoveElement").click(function () {
        //  DivObj=$("#example").empty();
        // DivObj = $("#example").remove();//display none (without events);
        DivObj = $("#example").detach();//remove element with events
    });
    $("#Recover").click(function () {
        $("body").append(DivObj);
    });


})//end of laoding page