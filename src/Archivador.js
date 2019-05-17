class Archivador extends Defensor{
    constructor(app,x,y){
        super(app,x,y);
        this.disparos = [];
        this.torreta = this.app.loadImage("./src/img/archivador.png");
        this.poder();
        console.log("Si disparax2");

        setInterval(this.mover,10);
    }


    poder(){
        this.disparos.push(new Tecla(this.app, this.x + (this.tamX), this.y + (this.tamY/2)));
    }

    mover(){
        this.x += this.vel;
    }

    pintar(){
        this.app.image(this.torreta, this.x + 20, this.y - 20, this.tamX, this.tamY);
        for(let indice = 0; indice < this.disparos.length;indice ++){
            this.disparos[indice].pintar();
        }
    }
}