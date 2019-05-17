class Logica{

    constructor(app){
        this.app = app;
        this.pantalla = 0;

        //tipografia
        this.tipografia = this.app.loadFont("./src/img/LemonMilk.otf");

        //basico
        this.principal = this.app.loadImage("./src/img/principal.jpg");
        this.mapa = this.app.loadImage("./src/img/mapa-01.png");
        this.nombre = this.app.loadImage("./src/img/nombre.jpg");

        //personajes
        this.telefono = this.app.loadImage("./src/img/enemigobasico.png");
        this.televisor = this.app.loadImage("./src/img/enemigotele.png");
        this.fotocopiadora = this.app.loadImage("./src/img/fotocopiadora.png");
        this.archivador = this.app.loadImage("./src/img/archivador.png");

        //botones
        this.oprimir1 = false;
        this.oprimir2 = false;

        //especiales
        this.bomba = this.app.loadImage("./src/img/bomba.png");

        //ataques
        this.ataquetelefono = this.app.loadImage("./src/img/ataquetelefono.png");

        //carl
        this.carl = this.app.loadImage("./src/img/carl.png");

        //vidas
        this.gafas = this.app.loadImage("./src/img/gafas.png");
        this.vidas = this.app.loadImage("./src/img/vidas.png");

        //arreglo
        this.enemigo1 = [];
        this.enemigo2 = [];
        this.enemigo3 = [];
        //console.log(this.pantalla);

        this.i = 0;

        this.textBox = " ";
        this.letra = this.textBox;
        this.px = 490;
        this.py = 465;
        this.contador = 0;

        this.posiciones = [];

        //Posiciones de los defensores en el tablero
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 3; j++) {
                this.posiciones.push(new Posiciones(this.app, ((i * 150) + 25), 130 + (j * 150)));
            }
        }

    }
         
    pintar(){
        switch (this.pantalla) {
            
            case 0:
            this.app.image(this.principal, 0, 0);
            
            
            break;
            
            case 1:
            //user
            this.app.image(this.nombre,0,0,1200,700);
            this.app.fill(255);
            this.app.textFont(this.tipografia);
            this.app.textSize(30);
            this.app.text(this.textBox,this.px,this.py);
            break;
            
            case 2:
            break;


            case 3:
            //pantalla de juego
            this.app.image(this.mapa, 0,0,1200,700);
            this.app.image(this.bomba, 0,0,50,50);
            //this.app.image(this.archivador, 700,200,50,100);
            //this.app.image(this.ataquetelefono, 200,300,80,30);
            //this.app.image(this.ataquebasico, 400,200,30,30);

            //posaliados
            for(let i = 0;i < this.posiciones.length;i++){
                this.posiciones[i].pintar()
            }

            if(this.app.frameCount % 100 == 0){
                //pos enemigos
                let eneAleatorio = this.app.random([1,2,3]);
                let y = this.app.random([135,290,450]);
               
                if(eneAleatorio == 1){
                    this.enemigo1.push(new Enemigo(1150,y,this.telefono));
                }

                if(eneAleatorio == 2){
                    this.enemigo2.push(new Enemigo(1150,y,this.televisor));
                }

                if(eneAleatorio == 3){
                    this.enemigo3.push(new Enemigo(1150,y,this.fotocopiadora));
                }
            }
            

            for (this.i = 0; this.i < this.enemigo1.length; this.i++) {
                this.pintarEnemigo(this.enemigo1[this.i]);
                this.enemigo1[this.i].mover(1);
            }

            for (this.i = 0; this.i < this.enemigo2.length; this.i++) {
                this.pintarEnemigo(this.enemigo2[this.i]);
                this.enemigo2[this.i].mover(1);
            }

            for (this.i = 0; this.i < this.enemigo3.length; this.i++) {
                this.pintarEnemigo(this.enemigo3[this.i]);
                this.enemigo3[this.i].mover(1);
            }
            break;
        }
        this.app.fill(0);
        this.app.text("x:" + this.app.mouseX + "y:" + this.app.mouseY, this.app.mouseX, this.app.mouseY);
    } 

    mouse(){
        switch(this.pantalla){
            case 0:
            if(this.app.mouseX >= 470 && this.app.mouseX <= 730 && this.app.mouseY >= 480 && this.app.mouseY <= 550){
                this.pantalla = 1;
            
            break;

        }
            case 1:

            if(this.app.mouseX >= 470 && this.app.mouseX <= 730 && this.app.mouseY >= 560 && this.app.mouseY <= 630){
                this.pantalla = 3;

            }
            break;

            case 2:
            break;

            case 3:

                if(this.app.mouseX >= 160 && this.app.mouseX <= 290 && this.app.mouseY >= 10 && this.app.mouseY <= 93){
                    this.oprimir1 = true;
                    this.oprimir2 = false;
                }
            
                if(this.app.mouseX >= 313 && this.app.mouseX <= 440 && this.app.mouseY >= 10 && this.app.mouseY <= 93){
                    this.oprimir1 = false;
                    this.oprimir2 = true;
                }

                for(let i = 0; i < this.posiciones.length; i++){
                    if(this.posiciones[i] instanceof Posiciones && this.posiciones[i].validar(this.app.mouseX,this.app.mouseY)){
                        
                        if (this.oprimir2 == true){
                            this.posiciones[i] = new Archivador(this.app, this.posiciones[i].x, this.posiciones[i].y);
                                return;
                            }
                        

                        if(this.oprimir1 == true){
                            this.posiciones[i] = new Maquina(this.app, this.posiciones[i].x, this.posiciones[i].y);
                            return;
                        }
                    }
                }

            break;

        }
    }

    pintarEnemigo(e){
        this.app.image(e.tipo,e.x,e.y,90,90);
    }

    texto(){
        this.textBox += this.app.key;
    }

    eliminar(){
        if(this.app.keyCode == this.app.BACKSPACE){
            this.contador -= 1;
            this.textBox = this.textBox.slice(0,-1);
        }
        this.contador += 1;

        if(this.app.keyCode == this.app.ENTER){
            this.textBox = this.textBox + "\n";
            this.contador = 0;
        }

        if(this.contador == 25 && 
            this.app.keyCode != this.app.BACKSPACE &&
            this.app.keyCode != this.app.ENTER){
            this.textBox = this.textBox + "\n";
            this.contador = 0;
        }
    }
}