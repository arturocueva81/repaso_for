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

// Cargar dinámicamente la animación al DOM cuando termine de cargar la página
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".animacion");
  if (!container) return;

  container.innerHTML = `
    <div class="hero-wrap">
      <div class="grid-view">
        <div class="card">
          <p class="title">Modo Explicación</p>
          <p class="desc">Cada clic avanza un paso lógico en el ciclo real.</p>
          
          <div class="code-display" id="codePanel">
            <div>for (let i = 8; i > 5; i--) {</div>
            <div style="padding-left: 20px;">  resultado += "• Hola Mundo";</div>
            <div>}</div>
          </div>

          <div class="stat-box" style="margin-bottom:10px; text-align:left;">
            <p style="font-size:12px; color:#64748b; margin:0;">Estado Actual:</p>
            <p id="explainText" style="font-size:14px; margin:4px 0; font-weight:500;">Presiona "Siguiente" para iniciar.</p>
          </div>

          <div class="stats-row">
            <div class="stat-box">
              <p style="font-size:11px; margin:0;">Variable i</p>
              <p class="stat-val" id="valI">?</p>
            </div>
            <div class="stat-box">
              <p style="font-size:11px; margin:0;">¿ i > 5 ?</p>
              <p class="stat-val" id="valCond">?</p>
            </div>
          </div>

          <div class="btn-grp">
            <button class="btn-outline" onclick="resetAnimation()">Reiniciar</button>
            <button id="nextBtn" onclick="stepAnimation()">Paso Siguiente →</button>
          </div>
          
          <div class="output-card">
            <p style="font-size:12px; font-weight:600; margin-bottom:8px;">CONSOLA DE SALIDA</p>
            <div class="terminal" id="terminalOut">Esperando inicio...</div>
          </div>
        </div>

        <div class="card">
          <p class="title">Mapa de Ejecución</p>
          <p class="desc">Sigue el flujo de datos a través de las estaciones.</p>
          
          <div class="canvas">
            <div class="path"></div>
            
            <!-- Station 1: Init -->
            <div class="station" id="pos0" style="top: 15%; left: 50%;">
              <span>🚩</span>
              <div class="label-tag">Inicialización<br><b>let i = 8</b></div>
            </div>
            
            <!-- Station 2: Condition -->
            <div class="station" id="pos1" style="top: 50%; left: 85%;">
              <span>⚖️</span>
              <div class="label-tag">Condición<br><b>i > 5</b></div>
            </div>
            
            <!-- Station 3: Body -->
            <div class="station" id="pos2" style="top: 85%; left: 50%;">
              <span>💬</span>
              <div class="label-tag">Ejecución<br><b>Hola Mundo</b></div>
            </div>
            
            <!-- Station 4: Update -->
            <div class="station" id="pos3" style="top: 50%; left: 15%;">
              <span>🌀</span>
              <div class="label-tag">Actualización<br><b>i--</b></div>
            </div>

            <div class="player" id="player"></div>
          </div>
          
          <p style="font-size:12px; color:#64748b; margin-top:20px; text-align:center;">
            <b>Dato curioso:</b> El ciclo se detiene en cuanto la condición da <i>false</i>.
          </p>
        </div>
      </div>
    </div>
  `;
});