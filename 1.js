// var putImages = document.getElementById("putImages");
var xml = new XMLHttpRequest();
xml.open("get","https://www.easy-mock.com/mock/5c56773b0e8d497fa4bc65e6/request",true);
xml.send();
    xml.onreadystatechange=function(){
      if(xml.readyState==4 && xml.status==200){
        var image3=JSON.parse(xml.responseText);
        console.log(image3);      
      putImages.innerHTML="<img src="+image3.projects[2].img3+"><img src="+image3.projects[0].img1+"><img src="+image3.projects[1].img2+"><img src="+image3.projects[2].img3+"><img src="+image3.projects[0].img1+">" 
      }//5张图实现效果更自然
    }
window.onload = function(){
  var b1 = document.getElementsByClassName("b1");
  var putImages = document.getElementById("putImages");//存放图片容器
  var buttons = document.getElementById("buttons").getElementsByTagName("span");//右下方按钮
  var lt = document.getElementById("lt");//左键切换
  var rt = document.getElementById("rt");//右键切换
  var index = 1;//button span的属性
  var moveLeft = false;//初始时动画停止
  var outTime;

  function leftMove(offset){
    moveLeft = true;
    var newl = parseInt(putImages.style.left) + offset;
    var totalTime = 400;
    var interval = 100;
    var singleTime = offset/(totalTime/interval);
    
    var animate = function (){
      if((singleTime > 0 && parseInt(putImages.style.left) < newl) || (singleTime < 0 && parseInt(putImages.style.left) > newl )){
        putImages.style.left = parseInt(putImages.style.left) + singleTime + "px";
        setTimeout(animate,interval);//递归
      }else{ 
         moveLeft = false;//减少卡顿
        putImages.style.left = newl + "px";
   if (newl < -1800) {
                putImages.style.left= - 600 + "px";
              } if(newl > -600){
                putImages.style.left = -1800 + "px";
              }
          }
      }
      animate();
    }//动画函数实现图片自然切换
   
  rt.onclick = function(){
    if (moveLeft) {
      return;
    }//解决点击右键过快导致的小圆点与图片不对应
        if (moveLeft == false) {
          leftMove(-600);
        }          
          if (index==3){
            index = 1;
          }else{
            index += 1;
          }             
             showButton();
  }//右键切换函数

  lt.onclick = function(){
        if (moveLeft == false) {
          leftMove(600);
        }  
          if (index==1){
            index = 3;
          }else{
            index -= 1;
          }         
          showButton();
  }//左键切换函数

  function showButton(){
     var i=0;
    while(i<buttons.length){
      if (buttons[i].className == "on") {
        buttons[i].className = "off";
        break;
      }
        i++;
    }//也可以for循环

    buttons[index-1].className = "on";
 
  }
  var i = 0;
  while(i<buttons.length){
    buttons[i].onclick = function(){
      if (this.className == "on") {
        return;//当点击"on"小圆点时，不用再走一遍函数
      }else{
    var myIndex = parseInt(this.getAttribute("index"));
    var offset = -600*(myIndex - index);
    leftMove(offset);
    index = myIndex;
    showButton();
  }
}
        i++; 
  }//按钮变化和点击跳转图函数
  function autoPlay(){
    outTime = setInterval(function(){
      rt.onclick();//setTimeInterval
    },3000);
  }
  function stopPlay(){
    clearInterval(outTime);//clearTimeout
  }
  b1.onmouseover = stopPlay;//鼠标覆盖事件
  b1.onmouseout = autoPlay;//鼠标移开事件
  autoPlay();//轮播图完成

  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  var p1 = document.getElementById("p1");
  var b341 = document.getElementById("b341");
  prev.onclick = function(){
    if (p1.innerHTML == 1) {
      return;
    }else{
      p1.innerHTML=parseInt(p1.innerHTML) - 1;
      pd();
    }
  }
  next.onclick = function(){
    if (p1.innerHTML == 3) {
      return;
    }else{
      p1.innerHTML=parseInt(p1.innerHTML) + 1;
      pd();
    }     
  }
  function pd(){
  if (p1.innerHTML == 2) {
    b341.innerHTML = "<li>优设零基础手绘课</li><li>优设AI零基础插画班 </li><li>推荐！UI视觉全能特训班</li><li>设计师向产品转能课程</li>";
  } if (p1.innerHTML == 3) {
    b341.innerHTML = "<li>超人气零基础手绘课程</li><li>热门！零基础学C4D手绘课程 </li><li>动效设计特训班</li><li>零基础UL设计课程</li>";
  } else {
    return;
  }
}
//简单分页效果，未添加超链接


var otit = document.getElementById("tit1");
var oli = otit.getElementsByTagName("li");
var ocont = document.getElementById("cont");
var odiv = ocont.getElementsByTagName("div");
var leng = oli.length;
for(var i=0; i < oli.length;i++){
  oli[i].index = i;
  oli[i].onmouseover=function(){
    for (var i = 0; i < oli.length; i++) {
      oli[i].className="";
      odiv[i].className="hide";
    }
    oli[this.index].className="op";
    odiv[this.index].className="";
  }
} 
  
}

  
  

