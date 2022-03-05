const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 700;
const CANVAS_HEIGHT = canvas.height = 800;
let sketchtboy = new Character();
let gameSpeed = 10;

function init() {
    } 
    
function draw() {
    setInterval(() => {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.drawImage(sketchtboy.img, sketchtboy.x, sketchtboy.y, sketchtboy.width, sketchtboy.height);
    }, 1000 / 100);
 
}   
draw();


 const backgroundLayer1 = new Image();
 backgroundLayer1.src = '../Skechtboy-Animation/Skecht_Boy/background_img/layer-1.png';
 const backgroundLayer2 = new Image();
 backgroundLayer2.src = '../Skechtboy-Animation/Skecht_Boy/background_img/layer-2.png';
 const backgroundLayer3 = new Image();
 backgroundLayer3.src = '../Skechtboy-Animation/Skecht_Boy/background_img/layer-3.png';
 const backgroundLayer4 = new Image();
 backgroundLayer4.src = '../Skechtboy-Animation/Skecht_Boy/background_img/layer-4.png';
 const backgroundLayer5 = new Image();
 backgroundLayer5.src = '../Skechtboy-Animation/Skecht_Boy/background_img/layer-5.png';

 let x = 0;
 let x2 = 2400;

 function animate() {
     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.drawImage(sketchtboy.img, sketchtboy.x, sketchtboy.y, sketchtboy.width, sketchtboy.height);
     ctx.drawImage(backgroundLayer5, x, 10)
     ctx.drawImage(backgroundLayer5, x2, 10)
     if (x < -2400) x = 2400 + x2 - gameSpeed;
     else x -= gameSpeed;
     if (x2 < -2400) x2 = 2400 + x - gameSpeed;
     else x2 -= gameSpeed;
     requestAnimationFrame(animate);
 }
 animate();