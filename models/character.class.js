class Character extends MovableObject{
     IMAGES_STANDING = [
        'Skecht_Boy/Transparent PNG/1_stand/frame1.png',
        'Skecht_Boy/Transparent PNG/1_stand/frame2.png',
        'Skecht_Boy/Transparent PNG/1_stand/frame3.png',
        'Skecht_Boy/Transparent PNG/1_stand/frame4.png',
        'Skecht_Boy/Transparent PNG/1_stand/frame5.png',
        'Skecht_Boy/Transparent PNG/1_stand/frame6.png'
    ];
    IMAGES_RUN = [
        'Skecht_Boy/Transparent PNG/2_run/frame1.png',
        'Skecht_Boy/Transparent PNG/2_run/frame2.png',
        'Skecht_Boy/Transparent PNG/2_run/frame3.png',
        'Skecht_Boy/Transparent PNG/2_run/frame4.png'
    ];
    IMAGES_JumpUp = [
        'Skecht_Boy/Transparent PNG/3_jumpUp/frame1.png',
        'Skecht_Boy/Transparent PNG/3_jumpUp/frame2.png',
    ]
    currentImage = 0;
    constructor() {
        super().loadImage('Skecht_Boy/Transparent PNG/1_stand/frame1.png');
        this.loadImages(this.IMAGES_RUN);
        
        this.animate();
    }
    
    animate() {
        setInterval(() => {
        let i = this.currentImage % this.IMAGES_RUN.length;
        let path = this.IMAGES_RUN[i]
        this.img = this.imageCache[path]
        this.currentImage++;
        }, 1000 / 9);
    }

}
