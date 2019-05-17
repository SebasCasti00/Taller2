class Posiciones{
     constructor(app, x, y) {
        this.app = app;
        this.x = x;
        this.y = y;
        this.tamX = 150;
        this.tamY = 160;

    }

    pintar() {
    
        this.app.noFill()
        //this.app.fill(255, 0, 0);
        //this.app.stroke(0);
        this.app.noStroke();
        this.app.rect(this.x, this.y, this.tamX, this.tamY);
    }


    validar(otroX, otroY) {
        if (otroX > this.x && otroX < this.x + this.tamX &&
            otroY > this.y && otroY < this.y + this.tamY) {
            return true;
        } else {
            return false;
        }
    }
}