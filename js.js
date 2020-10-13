var colour = '#000000';

function colorP(clr) {
   colour =  clr;
}

var r = 10;

function size(s) {
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
//Generic fill function
function fillCanvas(canvas, color) {
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/* color picker */

const pickrContainer = document.querySelector('.pickr-container');

const el = document.createElement('p');
pickrContainer.appendChild(el);
let pickr = null;
// Create fresh instance
pickr = new Pickr(Object.assign({
   el, theme:'classic',
   default: '#42445a'
},
{
   swatches: [
      'rgba(244, 67, 54, 1)',
      'rgba(233, 30, 99, 0.95)',
      'rgba(156, 39, 176, 0.9)',
      'rgba(103, 58, 183, 0.85)',
      'rgba(63, 81, 181, 0.8)',
      'rgba(33, 150, 243, 0.75)',
      'rgba(3, 169, 244, 0.7)',
      'rgba(0, 188, 212, 0.7)',
      'rgba(0, 150, 136, 0.75)',
      'rgba(76, 175, 80, 0.8)',
      'rgba(139, 195, 74, 0.85)',
      'rgba(205, 220, 57, 0.9)',
      'rgba(255, 235, 59, 0.95)',
      'rgba(255, 193, 7, 1)'
   ],
   components: {
      preview: true,

      interaction: {
         save: true
      }
   }
})).on('save', (color, instance) => {
   colorP(color.toHEXA().toString())
   pickr.hide();
});
