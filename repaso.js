function mostrar(opcion){
    switch(opcion){
        case 1:
            ejercicio1();
            break;
        case 2:
            imprmirCentenas();
            break;
        case 3:
            imprmirCentenasRegresivo();
            break;
        case 4:
            mostrarMensaje1();
            break;
        case 5:
            mostrarMensaje2();
            break;
        case 6:
            mostrarMensaje3();
            break;
        case 7:
            mostrarMensaje4();
            break;
        case 8:
            mostrarTabla();
            break;
        default:
            console.log("Opcion no valida");
    }

}

function ejercicio1(){
    for(let i = 1; i <= 5; i++){
        console.log(i);
    }
}

function imprmirCentenas(){
    for(let i = 100; i <= 1000; i+=100){
        console.log(i);
    }
}

function imprmirCentenasRegresivo(){
    for(let i = 1000; i >= 800; i-=100){
        console.log(i);
    }
}

function mostrarMensaje1(){
    for(let i=5; i<8; i++){
        console.log("Hola Mundo "+i);
    }
}

function mostrarMensaje2(){
    for(let i=10; i>=2; i-=3){
        console.log("Hola Mundo "+i);
    }
}

function mostrarMensaje3(){
    for(let i=0; i<3; i++){
        console.log("Hola Mundo "+i);
    }
}

function mostrarMensaje4(){
    for(let i=8; i>5; i--){
        console.log("Hola Mundo "+i);
    }
}

function mostrarTabla(){
    console.log("Tabla del 3");

    for(let i=1; i<=10;i++){
        console.log("3 x "+i+" = "+(3*i));
    }

}
