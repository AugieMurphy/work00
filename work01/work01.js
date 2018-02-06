var slate = document.getElementById("slate");
var ctx = slate.getContext("2d");
var t=0;
var oldX=0;
var oldY=0;
ctx.beginPath();

var drawCircle = function(x,y){
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.fill();
}

var connectTheDots = function(e){
    mouseX = e.offsetX
    mouseY = e.offsetY
    if(t==0){
	ctx.moveTo(mouseX, mouseY)
	drawCircle(mouseX,mouseY)
    }
    else{
	ctx.moveTo(oldX,oldY)
	ctx.lineTo(mouseX,mouseY)
	drawCircle(mouseX,mouseY)
    }
    ctx.stroke();
    t+=1;
    oldX=mouseX;
    oldY=mouseY;
}

slate.addEventListener("click", connectTheDots);

