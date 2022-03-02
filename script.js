const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;



let images = ['', ];
let images_src = [];

for (let i = 1; i < 6; i++) {
    images_src[i] = new Image();
    images_src[i].src = `Skecht Boy/Transparent PNG/${i.toString()}_stand/frame1.png`;
    images.push(images_src[i]);
}
let i = 1;

function animate() {
    i++;
    if (i >= 6) {
        i = 1;
    }
    ctx.drawImage(images[1], 0, 0);
    requestAnimationFrame(animate);
}