// repaso.js
function mostrar(opcion) {
    switch(opcion) {
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
            mostrarTabla(1);
            break;
        case 9:
            mostrarTabla(2);
            break;
        case 10:
            mostrarTabla(3);
            break;
        case 11:
            mostrarTabla(4);
            break;
        case 12:
            mostrarTabla(5);
            break;
        case 13:
            mostrarTabla(6);
            break;
        case 14:
            mostrarTabla(7);
            break;
        case 15:
            mostrarTabla(8);
            break;
        case 16:
            mostrarTabla(9);
            break;
        case 17:
            mostrarTabla(10);
            break;
        default:
            mostrarPopup("Error", "Opción no válida");
    }
}

function mostrarTabla(numero) {
    let resultado = `Tabla de multiplicar del ${numero}:\n`;
    for(let i = 1; i <= 10; i++) {
        resultado += `• ${numero} × ${i} = ${numero * i}\n`;
    }
    mostrarPopup(`Tabla del ${numero}`, resultado);
}

function mostrarPopup(titulo, contenido) {
    // Create popup elements
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    
    const content = document.createElement('div');
    content.className = 'popup-content';
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.className = 'popup-close';
    closeBtn.onclick = () => document.body.removeChild(overlay);
    
    const title = document.createElement('h3');
    title.textContent = titulo;
    
    const pre = document.createElement('pre');
    pre.textContent = contenido;
    
    // Assemble popup
    content.appendChild(closeBtn);
    content.appendChild(title);
    content.appendChild(pre);
    overlay.appendChild(content);
    document.body.appendChild(overlay);
    
    // Close on Escape key
    const closeOnEscape = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', closeOnEscape);
        }
    };
    document.addEventListener('keydown', closeOnEscape);
}

function ejercicio1() {
    let resultado = "Crear una función llamada ejercicio1 que utilice un ciclo for e Imprima en consola los números del 1 al 5 (incluidos):\n";
    for(let i = 1; i <= 5; i++) {
        resultado += `• ${i}\n`;
    }
    mostrarPopup("Conteo de 1 a 5", resultado);
}

function imprmirCentenas() {
    let resultado = "Imprimir en consola las centenas de forma ascendente:\n";
    for(let i = 100; i <= 1000; i += 100) {
        resultado += `• ${i}\n`;
    }
    mostrarPopup("Imprimir Centenas", resultado);
}

function imprmirCentenasRegresivo() {
    let resultado = "Imprimir en consola las centenas de forma descendente desde 1000 hasta 800:\n";
    for(let i = 1000; i >= 800; i -= 100) {
        resultado += `• ${i}\n`;
    }
    mostrarPopup("Imprimir Centenas Regresivo", resultado);
}

function mostrarMensaje1() {
    let resultado = "La variable del for inicia en 5 Usar el operador < en la condición:\n";
    for(let i = 5; i < 8; i++) {
        resultado += `• Hola Mundo\n`;
    }
    mostrarPopup("Mensaje 1", resultado);
}

function mostrarMensaje2() {
    let resultado = "La variable del for inicia en 10, usar el operador >= en la condición:\n";
    for(let i = 10; i >= 2; i -= 3) {
        resultado += `• Hola Mundo\n`;
    }
    mostrarPopup("Mensaje 2", resultado);
}

function mostrarMensaje3() {
    let resultado = "La variable inicia en 0 , usar el operador <:\n";
    for(let i = 0; i < 3; i++) {
        resultado += `• Hola Mundo\n`;
    }
    mostrarPopup("Mensaje 3", resultado);
}

function mostrarMensaje4() {
    let resultado = "La variable inicia en 8, usar el operador >:\n";
    for(let i = 8; i > 5; i--) {
        resultado += `• Hola Mundo\n`;
    }
    mostrarPopup("Mensaje 4", resultado);
}