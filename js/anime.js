
//图片切换
var iCount=2;
if(document.getElementById("a1")!=null){
    document.getElementById("a1").onmouseover=function (){
        iCount=1;
        changebgcolor(iCount);
    }
}
if(document.getElementById("a2")!=null){
    document.getElementById("a2").onmouseover=function (){
        iCount=2;
        changebgcolor(iCount);
    }
}
if(document.getElementById("a3")!=null){
    document.getElementById("a3").onmouseover=function (){
        iCount=3;
        changebgcolor(iCount);
    }
}
if(document.getElementById("a4")!=null){
    document.getElementById("a4").onmouseover=function (){
        iCount=4;
        changebgcolor(iCount);
    }
}
var titles=["学生会想前进","夏日重现", "哼唱菲莉鸟","水蒸气的另一侧"];
var iCarouselid=window.setInterval("carousel()",2000);
function carousel(){
    if(iCount==5)iCount=1;
    var sImgSrc=eval("'../images/番剧/banner'+iCount+'.png'");
    var sAchange=eval("'a'+iCount");
    var iA=iCount-1;
    if(iA==0){iA=4;}
    var sArestore=eval("'a'+iA");
    document.getElementById("anime-img").src=sImgSrc;
    changebgcolor(iCount);
    iCount=iCount+1;
    if(iCount===5){iCount=1;}
}
function changebgcolor(iNum){
    document.getElementById("anime-img").src=eval("'../images/番剧/banner'+iNum+'.png'");
    for(var iC=1;iC<=4;iC++){
        var sA=eval("'a'+iC");
        if(iC==iNum){
            document.getElementById(sA+'I').style.borderColor="red";
            document.getElementById("anime-title").innerText=titles[iC-1];
        }else{
            document.getElementById(sA+'I').style.borderColor="white";
        }
    }
}
