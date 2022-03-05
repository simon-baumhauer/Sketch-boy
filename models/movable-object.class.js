class MovableObject {
    x = 170;
    y = 210;
    img;
    height = 400;
    width = 240;
    imageCache = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

     loadImages(arr) {
         arr.forEach((path) => {
         let img = new Image(); 
         img.src = path;
        this.imageCache[path] = img;
         });
     }
 
}