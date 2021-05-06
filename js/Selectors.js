  //code JQuery 

        // window.onload=function(){
        //     //any js selector
        //     document.getElementById("Exmaple") 
        // }//end of loading

        // jQuery(document).ready(function(){
        //         //excuiter after page loading 
        // })//end of laoding
        // $(document).ready(function(){

        // })//end loading
        jQuery(window).ready(function(){
            alert("Hiiiiiiiiiiiiiiii");
        })
        $(function () {
            //Selectors 
            //CSS 
            // $(Selector).action(); //formula 
            //get elemnt by tag name,id ,class ,grouping ,uinversal 

            // $("div").css("backgroundColor", "lightgreen");
            // $("#example").css({
            //     //prop:propvalue,
            //     //propname:propvalue
            //     backgroundColor: "red",
            //     margin: "10px auto",
            //     padding: "5px",
            //     color: "blue",
            //     "text-align": "center"
            // });
            // document.getElementById("example")//===>first inter elem with id example

            //by class name
            // $(".a").css("backgroundColor", "cyan");
            //different type of selector same css style 

            // $("li ,.a,#example").css({
            //     backgroundColor:"yellow",
            //     color:"red"
            // });
            //universal selector
            // $("*").css({
            //     margin: "10px auot",
            //     padding: "5px",
            //     'text-align': 'center'

            // })

            // $("a,div").css({
            //     border:"1px solid green",
            //     color:"red",
            //     backgroundColor:"lightgreen"
            // })
            //attribute seelctor 
            // $("a[name]").css({
            //     backgroundColor:"yellow"
            // })
            // $("a[href='ftp.ncbi.nih.gov']").css({
            //     border:"2px solid red"
            // })
            //expression fliter @ attrbute value
            // $("a[href ^='http']").css({
            //     backgroundColor:"yellow"
            // })

            // $("a[href $='eg']").css("backgroundColor","blue")
            // $("a[href *='oo']").css({
            //     backgroundColor: "lightgreen"
            // })
            // $("input[type=text]").css({
            //     backgroundColor:"green"
            // })
            //group &&
            // $("a[href *='oo'][name='']").css({
            //     backgroundColor:"yellow"
            // })

            //form filter 
            // $("input[type=text]").css({
            //     backgroundColor: "green"
            // })
            //form collection //type //text,password,checked 
            // $(":text").css({
            //     backgroundColor:"yellow"
            // })
            // $(":checkbox")
            // $(":submit")
            // $(":file")
            // $(":checked")
            // $(":selected")
            //filter 
            // $("li").css({
            //     backgroundColor:"green"
            // })
            // $("li:first").css("backgroundColor","yellow")
            // $("li:last").css({
            //     backgroundColor:"red"
            // })

            // $("li:eq(3)").css({
            //     backgroundColor:"pink"
            // })
            // $("li:eq(-4)").css({
            //     backgroundColor:"blue"
            // })

            // $("tr:first").css("backgroundColor","yellow")

            // $("tr:first-child").css({
            //     backgroundColor:"red"
            // })
            // $("li:first-child").css({
            //     backgroundColor:"yellow"
            // })
            // $("li:last-child").css("backgroundColor","green")
            // $("li:nth-child(2)").css({
            //     backgroundColor: "cyan"
            // })
            // $("li:gt(2)").css({
            //     backgroundColor: "red"
            // })
            // $("li:lt(2)").css({
            //     backgroundColor: "yellow"
            // })

            //node tree selector 
            // $("div:empty").css({
            //     width: "120px",
            //     color: "green",
            //     padding: "5px",
            //     margin: "10px auto",
            //     height: "100px",
            //     backgroundColor:"yellow"
            // });

            // $("div:parent") //only parent elemnts
            //hierarchy selector
            //direct child,all insted child ,next sibling ,all next sibling 
            // $("div p").css("backgroundColor","green") 
            // $("div > p").css({
            //     backgroundColor:"yellow"
            // })
            // $("#example p").css({
            //     backgroundColor:"cyan"
            // })
            // $("table tr:first-child").css("backgroundColor", "green")
            // ===("tr:first-child")
            // $("table td:first-child").css({ backgroundColor: "cyan" })
            // $("tr:even").css({
            //     backgroundColor: "orange"
            // })
            // $("tr:odd").css("backgroundColor", "cyan")
            //direct next sibling  
            // $("img + input").css({
            //     backgroundColor: "yellow"
            // })
            //all next siblings

            // $("img ~ input").css("backgroundColor", "green")
            // $("h1:contains('Hierarchy')").css({
            //     backgroundColor:"green"
            // })
            // $("div:has(p)").css({
            //     backgroundColor:"lightgreen",
            //     width:"250px",
            //     margin:"10px auto",
            //     color:"red"
            // });

            //Attributs

            // innerHTML
            // Text
            // Value
            //as sitter and getter 
            // ===fucs (html(),text(),val())

            //    alert($("#example").html());
            // alert($("#example").text())
            // $("#example").html("<p style='background-color:red;text-align:center'>new Parag</p>")
            // $("#example").text("<p style='background-color:red;text-align:center'>new Parag</p>");

            //   alert($(":text:first").val())

            // $(":text:first").val("nay dataaaaa");

            // alert($("#example").val())//not result 

            //class 
            //className 
            //classList.add /remove
            //getAttribute("name of attribute")
            //setAttribute("name of attribute","value")
            $("img:first").attr("src", "tiger.gif");
            $("img:last").attr("src", "1.jpg");
            //  console.log($("img").attr("src"));xxx different attr value for same attribute
            //use attr with events 
            // $("p:first").attr("onclick",function(){
            //     alert("attriute handle");
            // });
            // $("p").attr("class","active");
            // $("p").removeAttr("class");
            // $("img").each(function (i, elem) {
            //     console.log($(elem).attr("src"));
            // })

            //excute after page loading
            //any selector code
        });//end of page load
