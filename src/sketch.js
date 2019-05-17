new p5(function(app){

    var logica;

    app.setup = function(){

        const canvas = app.createCanvas(1200,700);
        logica = new Logica(app);
    }

    app.draw = function(){

        logica.pintar();

    }

    app.mousePressed = function(){
        logica.mouse();
    }

    app.keyTyped = function(){
        logica.texto();
    }

    app.keyPressed = function(){
        logica.eliminar();
    }
});
