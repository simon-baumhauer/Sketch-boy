const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
let sketchtboy = new Character();


function init() {
    } 
    
function draw() {
    setInterval(() => {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.drawImage(sketchtboy.img, sketchtboy.x, sketchtboy.y, sketchtboy.width, sketchtboy.height);
    }, 1000 / 100);
 
}   


draw();
