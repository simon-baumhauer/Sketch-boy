class Character extends MovableObject{
    IMAGES_STANDING = [
        'Skecht_Boy/Transparent PNG/1_stand/frame1.png',
        'Skecht_Boy/Transparent PNG/1_stand/frame2.png',
        'Skecht_Boy/Transparent PNG/1_stand/frame3.png',
        'Skecht_Boy/Transparent PNG/1_stand/frame4.png',
        'Skecht_Boy/Transparent PNG/1_stand/frame5.png',
        'Skecht_Boy/Transparent PNG/1_stand/frame6.png'
    ];
    currentImage = 0;
    constructor() {
        super().loadImage('Skecht_Boy/Transparent PNG/1_stand/frame1.png');
        this.loadImages(this.IMAGES_STANDING);
        
        this.animate();
    }
    
    animate() {
        setInterval(() => {
        let i = this.currentImage % this.IMAGES_STANDING.length;
        let path = this.IMAGES_STANDING[i]
        this.img = this.imageCache[path]
        this.currentImage++;
        }, 1000 / 9);
    }

}
