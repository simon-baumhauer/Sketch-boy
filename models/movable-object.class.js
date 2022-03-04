class MovableObject {
    x = 0;
    y = 500;
    img;
    height = 100;
    width = 60;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('movingRight');
    }
}