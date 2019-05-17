class Enemigo{
    constructor(x,y,tipo){
        //this.app = app;
        this.x = x;
        this.y = y;
        this.tipo = tipo;
        this.vel = 4;

    }

    mover(dir, vel){
        if(vel == null){
            this.x += -4 * dir;
        }else{
            this.x += vel*dir;
        }
    }
}