class Tecla {
    constructor(app, x, y){
        this.app = app;
        this.x = x;
        this.y = y;
        this.tam = 20;
        this.vel = 5;
        this.daño =5;

        this.ataquebasico = this.app.loadImage("./src/img/ataquebasico.png");
        
        
        setInterval(this.mover,10);
        this.mover = this.mover.bind(this);
        console.log("Si dispara");
    }

    pintar(){
        this.app.image(this.ataquebasico, this.x, this.y, this.tam, this.tam);
        if(this.x > this.app.width + 100){
            clearInterval(this.update);
        }
    }

    mover(){
        this.x += this.vel;
    }

    validar(otroX, otroY){
        if(this.app.dist(this.x,this.y,otroX,otroY)< this.tam/2){
            return true;
        }else {return false;}
    }
}