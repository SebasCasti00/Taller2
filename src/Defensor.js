class Defensor{
   constructor(app, x, y, disparos){
       this.app = app;
       this.x = x;
       this.y = y;
       this.tamX = 60;
       this.tamY = 130;

       this.tamx = 100;
       this.tamy = 100;

       this.disparos = disparos;
       this.poder = this.poder.bind(this);
       setInterval(this.poder, 3000);
   } 

   pintar(){}
   poder(){}
}