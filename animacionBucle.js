// animacion.js
let stage = -1;
let i = 8;
let output = [];

const stages = [
  { pos: 0, text: "PASO 1: Se crea la variable 'i' y se le asigna 8.", i: 8, cond: "-", line: 0 },
  { pos: 1, text: "PASO 2: El guardián revisa. ¿8 es mayor que 5? SÍ.", i: 8, cond: "TRUE", line: 0 },
  { pos: 2, text: "PASO 3: Entramos al ciclo e imprimimos 'Hola Mundo'.", i: 8, cond: "TRUE", line: 1 },
  { pos: 3, text: "PASO 4: i disminuye en 1. Ahora i vale 7.", i: 7, cond: "-", line: 1 },
  { pos: 1, text: "PASO 5: ¿7 es mayor que 5? SÍ.", i: 7, cond: "TRUE", line: 1 },
  { pos: 2, text: "PASO 6: Segunda vuelta. Imprimimos de nuevo.", i: 7, cond: "TRUE", line: 2 },
  { pos: 3, text: "PASO 7: i disminuye de nuevo. Ahora i vale 6.", i: 6, cond: "-", line: 2 },
  { pos: 1, text: "PASO 8: ¿6 es mayor que 5? SÍ. Todavía pasa.", i: 6, cond: "TRUE", line: 2 },
  { pos: 2, text: "PASO 9: Última impresión del mensaje.", i: 6, cond: "TRUE", line: 3 },
  { pos: 3, text: "PASO 10: i disminuye a 5.", i: 5, cond: "-", line: 3 },
  { pos: 1, text: "PASO FINAL: ¿5 es mayor que 5? FALSO. El ciclo termina.", i: 5, cond: "FALSE", line: 3 }
];

function stepAnimation() {
  if (stage >= stages.length - 1) return;
  stage++;
  update();
}

function resetAnimation() {
  stage = -1;
  i = 8;
  output = [];
  const out = document.getElementById("terminalOut");
  if (out) out.textContent = "Esperando inicio...";
  update();
}

function update() {
  const s = stages[stage] || { pos: 0, text: "Presiona Siguiente para iniciar.", i: "?", cond: "?", line: 0 };
  const player = document.getElementById("player");
  const target = document.getElementById("pos" + s.pos);

  if (player) {
    if (stage === -1) {
      player.style.opacity = 0;
    } else {
      player.style.opacity = 1;
      // copiar posición del target (si existe)
      if (target) {
        player.style.top = target.style.top;
        player.style.left = target.style.left;
      }
    }
  }

  const explainEl = document.getElementById("explainText");
  const valI = document.getElementById("valI");
  const valCond = document.getElementById("valCond");
  const panel = document.getElementById("codePanel");
  const terminal = document.getElementById("terminalOut");
  const nextBtn = document.getElementById("nextBtn");

  if (explainEl) explainEl.textContent = s.text;
  if (valI) valI.textContent = s.i;
  if (valCond) valCond.textContent = s.cond;

  if (panel) {
    if (stage === -1) {
      panel.innerHTML =
        '<div>for (let i = 8; i > 5; i--) {</div>' +
        '<div style="padding-left: 20px;">resultado += "• Hola Mundo";</div>' +
        '<div>}</div>';
    } else {
      let html = "";
      if (s.pos === 0) {
        html =
          '<div class="code-hl">for (let i = 8; i > 5; i--) {</div>' +
          '<div style="padding-left: 20px;">resultado += "• Hola Mundo";</div>' +
          '<div>}</div>';
      } else if (s.pos === 1) {
        html =
          '<div>for (let i = 8; i > 5; i--) {</div>' +
          '<div class="code-hl" style="padding-left: 20px;">i > 5</div>' +
          '<div>}</div>';
      } else if (s.pos === 2) {
        html =
          '<div>for (let i = 8; i > 5; i--) {</div>' +
          '<div class="code-hl" style="padding-left: 20px;">resultado += "• Hola Mundo";</div>' +
          '<div>}</div>';
      } else if (s.pos === 3) {
        html =
          '<div>for (let i = 8; i > 5; i--) {</div>' +
          '<div style="padding-left: 20px;">resultado += "• Hola Mundo";</div>' +
          '<div class="code-hl">i--</div>' +
          '<div>}</div>';
      }
      panel.innerHTML = html;
    }
  }

  if (s.pos === 2 && stage !== -1) {
    output.push("> " + (output.length + 1) + ". Hola Mundo");
    if (terminal) terminal.textContent = output.join("\n");
  }

  for (let j = 0; j < 4; j++) {
    const el = document.getElementById("pos" + j);
    if (el) el.classList.toggle("active", j === s.pos && stage !== -1);
  }

  if (nextBtn) nextBtn.disabled = stage >= stages.length - 1;
}

// Hacer disponibles las funciones a nivel global (en caso de eventos inline onclick)
window.stepAnimation = stepAnimation;
window.resetAnimation = resetAnimation;

document.addEventListener("DOMContentLoaded", () => {
  // si la animación fue insertada dinámicamente por repaso.js,
  // puede que ya exista el HTML y aquí simplemente inicializamos vista.
  update();
});