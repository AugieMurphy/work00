var slate = document.getElementById("slate");
var ctx = slate.getContext("2d");


var toggle = document.getElementById("toggle");
var clear = document.getElementById("clear");

var shape = 0;

var drawCircle = function(x,y){
    ctx.fillStyle="blue";
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    console.log("hi");
}

var drawRect = function(x,y){
    ctx.fillStyle="green";
    ctx.beginPath();
    ctx.rect(x,y,10,20);
    ctx.fill();
    ctx.stroke();
}

var draw = function(e){
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    if( shape == 0 ){
	drawCircle(mouseX, mouseY);
    }
    else{
	drawRect(mouseX, mouseY, 10, 10);
    }
}

var changeShape = function(){
    if( shape == 0 ){
	shape=1;
    }
    else{
	shape=0;
    }
    console.log(shape);
}

var clearReact = function(){
    ctx.clearRect(0,0,slate.width,slate.height);
}


slate.addEventListener("click", draw);
toggle.addEventListener("click", changeShape);
clear.addEventListener("click", clearReact);


