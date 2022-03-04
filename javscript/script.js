const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
let sketchtboy = new Character();


function init() {
console.log(sketchtboy);
draw();
} 

function draw() {
    ctx.drawImage(sketchtboy.img, sketchtboy.x, sketchtboy.y, sketchtboy.width, sketchtboy.height);
    requestAnimationFrame(draw());
}