//显示用户名
var name=sessionStorage.getItem("name");
if(name!="null"){
    document.getElementById("username").innerText=name;
    var Img=document.getElementById("userImg");
    Img.src="../images/头像.png";
    document.getElementById("zcc").style.display="none";
    document.getElementById("collect").innerText="收藏";
    document.getElementById("collect").href='';
}

//导航栏悬停显示
document.getElementById("nav-anime").onmouseover=function (){
    document.getElementById("animePop").style.display="block";
}
document.getElementById("animePop").onmouseleave=function (){
    document.getElementById("animePop").style.display="none";
}
document.getElementById("nav-live").onmouseover=function (){
    document.getElementById("livePop").style.display="block";
}
document.getElementById("livePop").onmouseleave=function (){
    document.getElementById("livePop").style.display="none";
}

var header=document.getElementById("mini-header");
header.style.backgroundColor="#f9f9f9";
header.style.height="60px";
document.getElementById("main-site").style.color="black";
document.getElementById("nav-anime").style.color="black";
document.getElementById("nav-live").style.color="black";
document.getElementById("nav-game").style.color="black";
document.getElementById("nav-comic").style.color="black";
document.getElementById("nav-event").style.color="black";
document.getElementById("username").style.color="black";
document.getElementById("zcc").style.color="black";
document.getElementById("collect").style.color="black";
document.getElementById("logo").src="../images/logo.png";


