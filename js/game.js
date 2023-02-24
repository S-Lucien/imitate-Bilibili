if(document.getElementById("switcher1")!=null){
    document.getElementById("switcher1").onmouseover=function (){
        carousel();
    }
}
if(document.getElementById("switcher2")!=null){
    document.getElementById("switcher2").onmouseover=function (){
        carousel();
    }
}
if(document.getElementById("switcher3")!=null){
    document.getElementById("switcher3").onmouseover=function (){
        carousel();
    }
}
document.getElementById("switcher2").style.backgroundColor="#24b8f2";
var iCarouselid=window.setInterval("carousel()",3000);
function carousel(){
    for(var i=1;i<=3;i++){
        var simg=eval("'banner'+i");
        var swiper=eval("'swiper'+i");
        var switcher=eval("'switcher'+i");
        changePos(document.getElementById(swiper),simg,switcher);
    }
}
function changePos(swiper,simg,switcher){
    var zIndex=swiper.style.zIndex;
    if(zIndex==969){
        swiper.style.zIndex=989;
        swiper.style.transform="translateX(100px)";
        document.getElementById(switcher).style.backgroundColor="#24b8f2";
        document.getElementById(simg).style="    width: 100%;\n" +
            "    height: 100%;\n" +
            "    box-shadow: 0 24px 48px 0 rgb(5 45 75 / 20%);\n" +
            "    filter: brightness(100%);";
    }else{
        document.getElementById(switcher).style.backgroundColor="#000";
        document.getElementById(simg).style="    width: 75%;\n" +
            "    height: 75%;\n" +
            "    box-shadow: 0 12px 24px 0 rgb(5 45 75 / 20%);\n" +
            "    filter: brightness(75%);";
        if(zIndex==979){
            swiper.style.zIndex=969;
            swiper.style.transform="translateX(300px)";
        }else if(zIndex==989){
            swiper.style.zIndex=979;
            swiper.style.transform="translateX(-100px)";
        }
    }
}
var item1=document.getElementById("item1");
var item2=document.getElementById("item2");
var item3=document.getElementById("item3");
var item4=document.getElementById("item4");
item1.onmouseover=function (){
    item1.style.marginTop='0';
    item1.style.boxShadow="#f0f0f0 0 3px 3px 3px";
    document.getElementById("itemInfo1").style.height='20px';
}
item1.onmouseleave=function (){
    document.getElementById("itemInfo1").style.height='0';
    item1.style.marginTop='16px';
    item1.style.boxShadow="none";
}
item2.onmouseover=function (){
    item2.style.marginTop='0';
    item2.style.boxShadow="#f0f0f0 0 3px 3px 3px";
    document.getElementById("itemInfo2").style.height='20px';
}
item2.onmouseleave=function (){
    document.getElementById("itemInfo2").style.height='0';
    item2.style.marginTop='16px';
    item2.style.boxShadow="none";
}
item3.onmouseover=function (){
    item3.style.marginTop='0';
    item3.style.boxShadow="#f0f0f0 0 3px 3px 3px";
    document.getElementById("itemInfo3").style.height='20px';
}
item3.onmouseleave=function (){
    document.getElementById("itemInfo3").style.height='0';
    item3.style.marginTop='16px';
    item3.style.boxShadow="none";
}
item4.onmouseover=function (){
    item4.style.marginTop='0';
    item4.style.boxShadow="#f0f0f0 0 3px 3px 3px";
    document.getElementById("itemInfo4").style.height='20px';
}
item4.onmouseleave=function (){
    document.getElementById("itemInfo4").style.height='0';
    item4.style.marginTop='16px';
    item4.style.boxShadow="none";
}