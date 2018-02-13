var slate = document.getElementById("slate");
var ctx = slate.getContext("2d");

var clear = document.getElementById("clear");
var t=0;
var lastX=0;
var lastY=0;

var drawCircle = function(x,y){
    ctx.fillStyle="blue";
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    console.log("hi");
}

var connectTheDots = function(e){
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    if( t == 0 ){
	ctx.moveTo(mouseX, mouseY);
	t+=1;
    }
    else{
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(mouseX,mouseY);
	ctx.stroke();
    }
    drawCircle(mouseX, mouseY);
    ctx.stroke();
    lastX = mouseX;
    lastY = mouseY;

}

var clearReact = function(){
    ctx.clearRect(0,0,slate.width,slate.height);
    t=0;

}


slate.addEventListener("click", connectTheDots);
clear.addEventListener("click", clearReact);


