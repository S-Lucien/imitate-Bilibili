var name=sessionStorage.getItem("name");
if(name=="null"){
    document.getElementById("comment").style.display="none";
}else{
    document.getElementById("comment").style.display="flex";
}
if(document.getElementById("msg")){
    loadStorage("msg");
}
window.onload=function (){
    //发布评论
    if(document.getElementById("release")){
        document.getElementById("release").onclick=function (){
            var data=document.getElementById("message").value;
            if(data==""){
                document.getElementById("message").focus();
                return;
            }
            var time=new Date().getTime();
            localStorage.setItem(time.toString(),data);
            loadStorage("msg");
            document.getElementById("message").value="";
        }
    }
    //截图
    document.getElementById("prtSc").onclick=function (){
        var video=document.getElementById("video");
        var canvas=document.getElementById("popCanvas");
        oCtx=canvas.getContext('2d');
        oCtx.drawImage(video,0,0,668,376);
        document.getElementById("canvas").style.display="flex";
    }
    //拖拽
    document.getElementById("popCanvas").addEventListener("dragstart",function (e){
        var dtf=e.dataTransfer;
        dtf.setData("text/html",toImg(this));
    })

    var collect=document.getElementById("collect");
    collect.addEventListener("drop",function (e){
        var dtf=e.dataTransfer;
        var sHtml=dtf.getData("text/html");
        if(window.localStorage.pictures){
            var collects = JSON.parse(window.localStorage.pictures);
            collects.push(JSON.stringify(sHtml));
            localStorage.setItem("pictures",JSON.stringify(collects));
        }
        else{
            localStorage.setItem("pictures",JSON.stringify([sHtml]));
        }
    },false)

    document.ondragover=function (e){
        e.preventDefault();
    }
    document.ondrop=function (e){
        e.preventDefault();
    }
}
function parseDate(date) {
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate()< 10 ? '0' +date.getDate() + ' ': date.getDate() + ' ';
    var h = date.getHours()< 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
    var m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds()  : date.getSeconds() ;
    return Y + M + D + h + m + s;
}

function loadStorage(id){
    var msgs=[];
    for(var i=0;i<localStorage.length;i++){
        var date=new Date();
        date.setTime(localStorage.key(i));
        if(date.toString()=="Invalid Date"){
            continue;
        }
        var value=localStorage.getItem(localStorage.key(i));
        date=parseDate(date);
        var msg={Text:value,mDate:date};
        msgs.push(msg);
    }
    msgs.sort(compare('mDate'));
    var result="";
    for(var i=0;i<msgs.length;i++){
        result+="<div class=\"msg\">\n" +
            "                <span class='msg-num'>"+(i+1)+"楼&emsp;"+msgs[i].Text+"</span>\n" +
            "                <span class=\"msg-time\">"+msgs[i].mDate+"</span>\n" +
            "            </div>";
    }
    document.getElementById(id).innerHTML=result;
}
function  compare(attr){//评论时间升序
    return function(a,b){
        a = a[attr];
        b = b[attr];
        if(a < b){
            return -1;
        }
        if(a > b){
            return 1;
        }
        return 0;
    }
}

function hide(){
    document.getElementById("canvas").style.display="none";
}

function toImg(canvas){
    var imgUrl=canvas.toDataURL();
    return "<img class='image' src='"+imgUrl+"'>"+
        "<div style='text-align: center'>收藏于："+parseDate(new Date())+"</div>";
}