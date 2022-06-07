

//资料介绍的menu
change1();



$(".ssmenu1").hover(function(){
    $(".ssmenu1").css("background-color","#D2691E");
},function(){
    $(".ssmenu1").css("background-color","#DEB887");
})
$(".ssmenu2").hover(function(){
    $(".ssmenu2").css("background-color","#D2691E");
},function(){
    $(".ssmenu2").css("background-color","#DEB887");
})
$(".ssmenu3").hover(function(){
    $(".ssmenu3").css("background-color","#D2691E");
},function(){
    $(".ssmenu3").css("background-color","#DEB887");
})
$(".ssmenu4").hover(function(){
    $(".ssmenu4").css("background-color","#D2691E");
},function(){
    $(".ssmenu4").css("background-color","#DEB887");
})


function change1() {
	$(".ssecond").children().hide();
	$(".gcyy").show();
}
function change2() {
	$(".ssecond").children().hide();
	$(".lsyg").show();
}
function change3() {
	$(".ssecond").children().hide();
	$(".zjwh").show();
}
function change4() {
	$(".ssecond").children().hide();
	$(".mzfs").show();
}


// 旅游menu

$(".lvyou1").hover(function(){
    $(".lvyou1").css("background-color","#D2691E");
},function(){
    $(".lvyou1").css("background-color","#DEB887");
})
$(".lvyou2").hover(function(){
    $(".lvyou2").css("background-color","#D2691E");
},function(){
    $(".lvyou2").css("background-color","#DEB887");
})
$(".lvyou3").hover(function(){
    $(".lvyou3").css("background-color","#D2691E");
},function(){
    $(".lvyou3").css("background-color","#DEB887");
})
$(".lvyou4").hover(function(){
    $(".lvyou4").css("background-color","#D2691E");
},function(){
    $(".lvyou4").css("background-color","#DEB887");
})
$(".lvyou5").hover(function(){
    $(".lvyou5").css("background-color","#D2691E");
},function(){
    $(".lvyou5").css("background-color","#DEB887");
})
$(".lvyou6").hover(function(){
    $(".lvyou6").css("background-color","#D2691E");
},function(){
    $(".lvyou6").css("background-color","#DEB887");
})
$(".lvyou7").hover(function(){
    $(".lvyou7").css("background-color","#D2691E");
},function(){
    $(".lvyou7").css("background-color","#DEB887");
})




//美食js\css
function h(argument) {
    // body...
    $(".foodmenunew").children().css("text-shadow",
    "none")
}
function h1(argument) {
    // body...
    $(".newmenu1").css("text-shadow",
    ".2rem 0rem .5rem pink,-.2rem 0rem .5rem pink,0rem .2rem .5rem pink,0rem -.2rem .5rem pink")
}
function h2(argument) {
    // body...
    $(".newmenu2").css("text-shadow",
    ".2rem 0rem .5rem pink,-.2rem 0rem .5rem pink,0rem .2rem .5rem pink,0rem -.2rem .5rem pink")
}
function h3(argument) {
    // body...
    $(".newmenu3").css("text-shadow",
    ".2rem 0rem .5rem pink,-.2rem 0rem .5rem pink,0rem .2rem .5rem pink,0rem -.2rem .5rem pink")
}
function h4(argument) {
    // body...
    $(".newmenu4").css("text-shadow",
    ".2rem 0rem .5rem pink,-.2rem 0rem .5rem pink,0rem .2rem .5rem pink,0rem -.2rem .5rem pink")
}
hotpot();

function hotpot(argument) {
    // body...
    $(".menuch").children().hide();
    $(".hotpot").show();
    h();
    h1();

}
function langyd(argument) {
    // body...
    $(".menuch").children().hide();
    $(".langyd").show();
    h();
    h2();
}
function lvf(argument) {
    // body...
    $(".menuch").children().hide();
    $(".lvf").show();
    h();
    h4();
}
function myss(){
    $(".menuch").children().hide();
    $(".myss").show();
    h();
    h3();
}

$(".newmenu1").hover(function(){
    $(".newmenu1").css("background-color"," #888888");
},function(){
    $(".newmenu1").css("background-color"," #666666");
})
$(".newmenu2").hover(function(){
    $(".newmenu2").css("background-color"," #888888");
},function(){
    $(".newmenu2").css("background-color"," #666666");
})
$(".newmenu3").hover(function(){
    $(".newmenu3").css("background-color"," #888888");
},function(){
    $(".newmenu3").css("background-color"," #666666");
})
$(".newmenu4").hover(function(){
    $(".newmenu4").css("background-color"," #888888");
},function(){
    $(".newmenu4").css("background-color"," #666666");
})



// 桃源导航
function nonefocus(argument) {
    // body...
    $(".menufocus").children().css("opacity","0");
    $("#f1").css("opacity","1");
}

nonefocus();

$("#d1").hover(function(){
    $("#d1").css("text-shadow","0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff");
    $("#f1").css("opacity","1");
},function(){
    $("#d1").css("text-shadow","0 0");
    $("#f1").css("opacity","0");
})
$("#d2").hover(function(){
    $("#d2").css("text-shadow","0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff");
    $("#f2").css("opacity","1");
},function(){
    $("#d2").css("text-shadow","0 0");
    $("#f2").css("opacity","0");
})
$("#d3").hover(function(){
    $("#d3").css("text-shadow","0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff");
    $("#f3").css("opacity","1");
},function(){
    $("#d3").css("text-shadow","0 0");
    $("#f3").css("opacity","0");
})
$("#d4").hover(function(){
    $("#d4").css("text-shadow","0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff");
    $("#f4").css("opacity","1");
},function(){
    $("#d4").css("text-shadow","0 0");
    $("#f4").css("opacity","0");
})
$("#d5").hover(function(){
    $("#d5").css("text-shadow","0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff");
    $("#f5").css("opacity","1");
},function(){
    $("#d5").css("text-shadow","0 0");
    $("#f5").css("opacity","0");
})
$("#d6").hover(function(){
    $("#d6").css("text-shadow","0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff");
    $("#f6").css("opacity","1");
},function(){
    $("#d6").css("text-shadow","0 0");
    $("#f6").css("opacity","0");
})
$("#d7").hover(function(){
    $("#d7").css("text-shadow","0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff");
    $("#f7").css("opacity","1");
},function(){
    $("#d7").css("text-shadow","0 0");
    $("#f7").css("opacity","0");
})







// 主

function nonefocus0(argument) {
    // body...
    $(".cdmenu").children().css("opacity","0");
    
}

nonefocus0();


$(".m-li1").hover(function(){
    $(".m-li1").css("text-shadow","0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff");
    $("#c1").css("opacity","1");
},function(){
    $(".m-li1").css("text-shadow","0 0");
    $(".cdmenu").children().css("opacity","0");
})
$(".m-li2").hover(function(){
    $(".m-li2").css("text-shadow","0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff");
    $("#c2").css("opacity","1");
},function(){
    $(".m-li2").css("text-shadow","0 0");
    $(".cdmenu").children().css("opacity","0");
})
$(".m-li3").hover(function(){
    $(".m-li3").css("text-shadow","0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff");
    $("#c3").css("opacity","1");
},function(){
    $(".m-li3").css("text-shadow","0 0");
    $(".cdmenu").children().css("opacity","0");
})
$(".m-li4").hover(function(){
    $(".m-li4").css("text-shadow","0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff");
    $("#c4").css("opacity","1");
},function(){
    $(".m-li4").css("text-shadow","0 0");
    $(".cdmenu").children().css("opacity","0");
})
$(".m-li5").hover(function(){
    $(".m-li5").css("text-shadow","0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff");
    $("#c5").css("opacity","1");
},function(){
    $(".m-li5").css("text-shadow","0 0");
    $(".cdmenu").children().css("opacity","0");
})
$(".m-li6").hover(function(){
    $(".m-li6").css("text-shadow","0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff");
    $("#c6").css("opacity","1");
},function(){
    $(".m-li6").css("text-shadow","0 0");
    $(".cdmenu").children().css("opacity","0");
})
