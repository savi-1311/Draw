	var colour = '#000000';
	function colorP(clr) 
	{
		colour =  clr;
    }
    var r = 10;
	function size(s) 
	{
		r = s;
    }
var c1 = document.getElementById("layer1");
var ctx1 = c1.getContext("2d");
ctx1.fillStyle = "#FFFFFF";
ctx1.fillRect(0, 0, 800, 600);	
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
ctx.beginPath();
ctx.stroke();
ctx.lineCap = "round";
var draw = false;
var lineStart = true;
var lastX, lastY;
function yesDraw() { draw = true; lineStart = true }
function mouseMove(e) {
	ctx.lineWidth = r * 2;
	ctx.strokeStyle = colour; 
   const bounds = c.getBoundingClientRect();
   const x = e.pageX - bounds.left - scrollX;
   const y = e.pageY - bounds.top - scrollY;
   if(draw && x > -r && x < c.width + r && y > -r && y < c.height + r){
      drawing(x,y);
   }
}
function noDraw() { draw = false }
document.addEventListener("mousemove",mouseMove);
document.addEventListener("mousedown",yesDraw);
document.addEventListener("mouseup",noDraw);
function drawing(x, y) {
  if(lineStart){
     lastX = x;
     lastY = y;
     lineStart = false;
  }
  ctx.beginPath();
  ctx.lineTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();
  lastX = x;
  lastY = y;
}
