class Maquina extends Defensor{
    constructor(app,x,y){
        super(app,x,y);
        this.disparos = [];
        this.torreta = this.app.loadImage("./src/img/torreta.png");
        this.poder();
    }


    poder(){
        this.disparos.push(new Tecla(this.app, this.x + (this.tamX), this.y + (this.tamY/2)));
    }

    pintar(){
        this.app.image(this.torreta, this.x, this.y, this.tamx, this.tamy);
        for(let indice = 0; indice < this.disparos.length;indice ++){
            this.disparos[indice].pintar();
        }
    }
}