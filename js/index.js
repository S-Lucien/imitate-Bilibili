//显示用户名
var name=sessionStorage.getItem("name");
if(name!="null"){
    document.getElementById("username").innerText=name;
    var Img=document.getElementById("userImg");
    Img.src="./images/头像.png";
    document.getElementById("collect").innerText="收藏";
    document.getElementById("zcc").style.display='none';
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

// 导航栏浮动
window.onscroll = function (){
    var header=document.getElementById("mini-header");
    if (document.documentElement.scrollTop!=0){
        header.style.backgroundColor="#f9f9f9";
        header.style.height="60px";
        document.getElementById("main-site").style.color="black";
        document.getElementById("nav-anime").style.color="black";
        document.getElementById("nav-live").style.color="black";
        document.getElementById("nav-game").style.color="black";
        document.getElementById("nav-comic").style.color="black";
        document.getElementById("nav-event").style.color="black";
        document.getElementById("username").style.color="black";
        document.getElementById("collect").style.color="black";
        document.getElementById("zcc").style.color="black";
        document.getElementById("logo").src="images/logo.png";
        // document.getElementById("mini-header").
    }else {
        header.style.backgroundColor="transparent";
        document.getElementById("main-site").style.color="white";
        document.getElementById("nav-anime").style.color="white";
        document.getElementById("nav-live").style.color="white";
        document.getElementById("nav-game").style.color="white";
        document.getElementById("nav-comic").style.color="white";
        document.getElementById("nav-event").style.color="white";
        document.getElementById("username").style.color="white";
        document.getElementById("collect").style.color="white";
        document.getElementById("zcc").style.color="white";
        document.getElementById("logo").src="images/bilibili.png";
    }
}

//图片切换
var iCount=2;
if(document.getElementById("a1")!=null){
    document.getElementById("a1").onclick=function (){
        iCount=1;
        changebgcolor(iCount);
    }
}
if(document.getElementById("a2")!=null){
    document.getElementById("a2").onclick=function (){
        iCount=2;
        changebgcolor(iCount);
    }
}
if(document.getElementById("a3")!=null){
    document.getElementById("a3").onclick=function (){
        iCount=3;
        changebgcolor(iCount);
    }
}
if(document.getElementById("a4")!=null){
    document.getElementById("a4").onclick=function (){
        iCount=4;
        changebgcolor(iCount);
    }
}
var titles=["这段青春，你可想过反复重刷","那个朗朗书声的童年,戳到了我的”心巴“上...",
                    "爱你就多唱一遍!","凡尔赛宫里的权利与欲望"];
var iCarouselid=window.setInterval("carousel()",2000);
function carousel(){
    if(iCount==5)iCount=1;
    var sImgSrc=eval("'images/推荐/act'+iCount+'.png'");
    var sAchange=eval("'a'+iCount");
    var iA=iCount-1;
    if(iA==0){iA=4;}
    var sArestore=eval("'a'+iA");
    document.getElementById("act-img").src=sImgSrc;
    document.getElementById("act-title").innerText=titles[iCount-1];
    document.getElementById(sAchange).style.backgroundColor="hsl(20,30%,50%)";
    document.getElementById(sArestore).style.backgroundColor="hsl(20,50%,30%)";
    iCount=iCount+1;
    if(iCount===5){iCount=1;}
}
function changebgcolor(iNum){
    document.getElementById("act-img").src=eval("'images/推荐/act'+iNum+'.png'");
    for(var iC=1;iC<=4;iC++){
        var sA=eval("'a'+iC");
        if(iC==iNum){
            document.getElementById(sA).style.backgroundColor="hsl(20,30%,50%)";
            document.getElementById("act-title").innerText=titles[iC-1];
        }else{
            document.getElementById(sA).style.backgroundColor="hsl(20,50%,30%)";
        }
    }
}

//换一换
var recommend=1;
document.getElementById("rec-switcher").onclick=function (){
    if(recommend==1){
        for(var i=1;i<=6;i++){
            document.getElementById("rec-video1"+i).hidden=true;
            document.getElementById("rec-video2"+i).hidden=false;
        }
        recommend=2;
    }
    else {
        for(var i=1;i<=6;i++){
            document.getElementById("rec-video2"+i).hidden=true;
            document.getElementById("rec-video1"+i).hidden=false;
        }
        recommend=1;
    }
}
var live=1;
document.getElementById("live-switcher").onclick=function (){
    if(live==1){
        for(var i=1;i<=8;i++){
            document.getElementById("live1"+i).hidden=true;
            document.getElementById("live2"+i).hidden=false;
        }
        live=2;
    }
    else {
        for(var i=1;i<=8;i++){
            document.getElementById("live2"+i).hidden=true;
            document.getElementById("live1"+i).hidden=false;
        }
        live=1;
    }
}