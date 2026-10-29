// === 1. EFECTOS DE SONIDO (WEB AUDIO API NATIVO) ===
let sonidoHabilitado = true;
let audioCtx = null;

function getAudioContext() {
    if (!audioCtx) {
        const AudioClass = window.AudioContext || window.webkitAudioContext;
        if (AudioClass) audioCtx = new AudioClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

const notasDedos = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99, 880.00];

function sonidoPop(pitchIndex = 0) {
    if (!sonidoHabilitado) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    try {
        const freq = notasDedos[Math.abs(pitchIndex) % notasDedos.length];
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.08, now + 0.05);

        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.22);
    } catch (e) {}
}

function sonidoCorrecto() {
    if (!sonidoHabilitado) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    try {
        const now = ctx.currentTime;
        const notas = [523.25, 659.25, 783.99, 1046.50];
        notas.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            const startTime = now + idx * 0.07;
            osc.frequency.setValueAtTime(freq, startTime);
            gain.gain.setValueAtTime(0, startTime);
            gain.gain.linearRampToValueAtTime(0.25, startTime + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(startTime);
            osc.stop(startTime + 0.38);
        });
    } catch (e) {}
}

function sonidoFanfarria() {
    if (!sonidoHabilitado) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    try {
        const now = ctx.currentTime;
        const seq = [
            { f: 523.25, t: 0, d: 0.12 },
            { f: 659.25, t: 0.12, d: 0.12 },
            { f: 783.99, t: 0.24, d: 0.14 },
            { f: 1046.50, t: 0.38, d: 0.4 },
            { f: 880.00, t: 0.65, d: 0.12 },
            { f: 1046.50, t: 0.78, d: 0.6 }
        ];
        seq.forEach(({ f, t, d }) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            const st = now + t;
            osc.frequency.setValueAtTime(f, st);
            gain.gain.setValueAtTime(0, st);
            gain.gain.linearRampToValueAtTime(0.28, st + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, st + d);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(st);
            osc.stop(st + d + 0.05);
        });
    } catch (e) {}
}

function sonidoError() {
    if (!sonidoHabilitado) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    try {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(220, now + 0.18);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.26);
    } catch (e) {}
}

function sonidoTap() {
    if (!sonidoHabilitado) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    try {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(500, now);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
    } catch (e) {}
}

// === 2. CONFETI EN CANVAS (SIN LIBRERÍAS EXTERNAS) ===
function lanzarConfeti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particulas = [];
    const colores = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF9F43', '#54A0FF', '#9B59B6'];

    for (let i = 0; i < 80; i++) {
        particulas.push({
            x: canvas.width / 2,
            y: canvas.height * 0.6,
            vx: (Math.random() - 0.5) * 16,
            vy: -(Math.random() * 12 + 6),
            size: Math.random() * 8 + 5,
            color: colores[Math.floor(Math.random() * colores.length)],
            rot: Math.random() * 360,
            vRot: (Math.random() - 0.5) * 10
        });
    }

    let frame = 0;
    function animar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particulas.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.4;
            p.rot += p.vRot;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rot * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
        });

        frame++;
        if (frame < 90) {
            requestAnimationFrame(animar);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    animar();
}

// === 3. ESTADO DEL JUEGO ===
let actividadActual = 'contar';
let nivelActual = 1;
let estrellas = 0;
let num1 = 0;
let num2 = 0;
let respuestaCorrecta = 0;

let mano1 = [false, false, false, false, false];
let mano2 = [false, false, false, false, false];
let restados1 = [false, false, false, false, false];
let restados2 = [false, false, false, false, false];

// === 4. FUNCIONES DE VISTA DE MANOS ===
function actualizarMano(manoId) {
    const estado = manoId === 1 ? mano1 : mano2;
    const restados = manoId === 1 ? restados1 : restados2;
    const manoEl = document.getElementById(`mano${manoId}`);
    if (!manoEl) return;

    const dedos = manoEl.querySelectorAll('.dedo-estilo');
    estado.forEach((arriba, idx) => {
        if (arriba) {
            dedos[idx].classList.remove('abajo');
        } else {
            dedos[idx].classList.add('abajo');
        }

        const yaTieneTacha = dedos[idx].querySelector('.dedo-tachado');
        if (restados[idx]) {
            if (!yaTieneTacha) {
                const tacha = document.createElement('span');
                tacha.className = 'dedo-tachado';
                tacha.textContent = '✕';
                dedos[idx].appendChild(tacha);
            }
        } else if (yaTieneTacha) {
            yaTieneTacha.remove();
        }
    });

    const cant = estado.filter(Boolean).length;
    const contadorEl = document.getElementById(`cont${manoId}`);
    if (contadorEl) contadorEl.textContent = cant;
}

function toggleDedo(indice, manoId) {
    sonidoPop((manoId - 1) * 5 + indice);
    if (manoId === 1) {
        mano1[indice] = !mano1[indice];
    } else {
        mano2[indice] = !mano2[indice];
    }
    actualizarMano(manoId);
}

// === 5. GENERADOR DE PROBLEMAS ===
function nuevoProblema() {
    ocultarFeedback();
    restados1 = [false, false, false, false, false];
    restados2 = [false, false, false, false, false];

    const contenedorMano2 = document.getElementById('contenedor-mano2');
    const simboloEl = document.getElementById('simbolo-op');
    const cajaEq = document.getElementById('ecuacion-caja');
    const n1El = document.getElementById('n1');
    const n2El = document.getElementById('n2');
    const resEl = document.getElementById('resultado-preview');

    if (actividadActual === 'contar') {
        cajaEq.classList.add('oculto');
        if (nivelActual === 1) {
            contenedorMano2.classList.add('oculto');
            respuestaCorrecta = Math.floor(Math.random() * 5) + 1;
            mano1 = Array(5).fill(false).map((_, i) => i < respuestaCorrecta);
            mano2 = Array(5).fill(false);
        } else {
            contenedorMano2.classList.remove('oculto');
            respuestaCorrecta = Math.floor(Math.random() * 9) + 2;
            const nH1 = Math.min(5, respuestaCorrecta);
            const nH2 = Math.max(0, respuestaCorrecta - 5);
            mano1 = Array(5).fill(false).map((_, i) => i < nH1);
            mano2 = Array(5).fill(false).map((_, i) => i < nH2);
        }
    } else if (actividadActual === 'sumar') {
        cajaEq.classList.remove('oculto');
        contenedorMano2.classList.remove('oculto');
        simboloEl.textContent = '➕';
        simboloEl.className = 'simbolo';

        if (nivelActual === 1) {
            const pares = [[1,1], [1,2], [2,1], [2,2], [1,3], [3,1], [2,3], [1,4]];
            const p = pares[Math.floor(Math.random() * pares.length)];
            num1 = p[0];
            num2 = p[1];
        } else {
            const pares = [[2,3], [3,3], [3,4], [4,3], [4,4], [5,2], [2,5], [5,3], [3,5], [5,4], [5,5]];
            const p = pares[Math.floor(Math.random() * pares.length)];
            num1 = p[0];
            num2 = p[1];
        }
        respuestaCorrecta = num1 + num2;
        n1El.textContent = num1;
        n2El.textContent = num2;
        resEl.textContent = '?';

        mano1 = Array(5).fill(false).map((_, i) => i < num1);
        mano2 = Array(5).fill(false).map((_, i) => i < num2);
    } else if (actividadActual === 'restar') {
        cajaEq.classList.remove('oculto');
        simboloEl.textContent = '➖';
        simboloEl.className = 'simbolo simbolo-resta';

        if (nivelActual === 1) {
            contenedorMano2.classList.add('oculto');
            const pares = [[5,1], [5,2], [5,3], [4,1], [4,2], [3,1], [3,2], [2,1]];
            const p = pares[Math.floor(Math.random() * pares.length)];
            num1 = p[0];
            num2 = p[1];
            respuestaCorrecta = num1 - num2;

            mano1 = Array(5).fill(false).map((_, i) => i < num1);
            mano2 = Array(5).fill(false);
            for (let i = num1 - 1; i >= num1 - num2; i--) restados1[i] = true;
        } else {
            contenedorMano2.classList.remove('oculto');
            const pares = [[6,2], [6,3], [7,2], [7,3], [8,3], [8,4], [9,3], [9,4], [10,4], [10,5]];
            const p = pares[Math.floor(Math.random() * pares.length)];
            num1 = p[0];
            num2 = p[1];
            respuestaCorrecta = num1 - num2;

            const nH1 = Math.min(5, num1);
            const nH2 = Math.max(0, num1 - 5);
            mano1 = Array(5).fill(false).map((_, i) => i < nH1);
            mano2 = Array(5).fill(false).map((_, i) => i < nH2);

            let restan = num2;
            for (let i = nH2 - 1; i >= 0 && restan > 0; i--) { restados2[i] = true; restan--; }
            for (let i = nH1 - 1; i >= 0 && restan > 0; i--) { restados1[i] = true; restan--; }
        }

        n1El.textContent = num1;
        n2El.textContent = num2;
        resEl.textContent = '?';
    }

    actualizarMano(1);
    actualizarMano(2);
    generarBotonesOpciones();
}

// === 6. BOTONES DE RESPUESTA ===
function generarBotonesOpciones() {
    const contenedor = document.getElementById('caja-opciones');
    contenedor.innerHTML = '';

    let opciones = [];
    if (nivelActual === 1) {
        opciones = [1, 2, 3, 4, 5];
    } else {
        const set = new Set([
            respuestaCorrecta,
            respuestaCorrecta - 1,
            respuestaCorrecta + 1,
            respuestaCorrecta - 2,
            respuestaCorrecta + 2
        ]);
        opciones = Array.from(set).filter(n => n >= 1 && n <= 10).sort((a, b) => a - b);
        if (opciones.length < 4) {
            opciones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        }
    }

    opciones.forEach(num => {
        const btn = document.createElement('button');
        btn.className = 'btn-opcion';
        btn.textContent = num;
        btn.onclick = () => verificarRespuesta(num);
        contenedor.appendChild(btn);
    });
}

function verificarRespuesta(numElegido) {
    if (numElegido === respuestaCorrecta) {
        sonidoCorrecto();
        lanzarConfeti();
        mostrarFeedback(true);
        document.getElementById('resultado-preview').textContent = respuestaCorrecta;

        estrellas++;
        actualizarEstrellas();

        if (estrellas >= 5) {
            setTimeout(mostrarVictoria, 900);
        } else {
            setTimeout(nuevoProblema, 1300);
        }
    } else {
        sonidoError();
        mostrarFeedback(false);
    }
}

function mostrarFeedback(esCorrecto) {
    const el = document.getElementById('feedback-mensaje');
    el.classList.remove('oculto', 'feedback-bien', 'feedback-mal');
    if (esCorrecto) {
        el.classList.add('feedback-bien');
        el.textContent = '¡Muy bien! ⭐';
    } else {
        el.classList.add('feedback-mal');
        el.textContent = '¡Intenta otra vez! 🔄';
    }
}

function ocultarFeedback() {
    const el = document.getElementById('feedback-mensaje');
    el.classList.add('oculto');
}

function actualizarEstrellas() {
    const spanEstrellas = document.getElementById('estrellas-contador');
    spanEstrellas.innerHTML = '⭐'.repeat(estrellas) + '☆'.repeat(5 - estrellas);
}

// === 7. NAVEGACIÓN Y MENÚ ===
function iniciarActividad(actividad, nivel = 1) {
    sonidoTap();
    actividadActual = actividad;
    nivelActual = nivel;
    estrellas = 0;
    actualizarEstrellas();

    document.getElementById('menu-principal').classList.add('oculto');
    document.getElementById('seccion-juego').classList.remove('oculto');

    document.getElementById('btn-lvl1').classList.toggle('activo', nivel === 1);
    document.getElementById('btn-lvl2').classList.toggle('activo', nivel === 2);

    nuevoProblema();
}

function cambiarNivel(nivel) {
    sonidoTap();
    nivelActual = nivel;
    estrellas = 0;
    actualizarEstrellas();
    document.getElementById('btn-lvl1').classList.toggle('activo', nivel === 1);
    document.getElementById('btn-lvl2').classList.toggle('activo', nivel === 2);
    nuevoProblema();
}

function volverAlMenu() {
    sonidoTap();
    document.getElementById('modal-victoria').classList.add('oculto');
    document.getElementById('seccion-juego').classList.add('oculto');
    document.getElementById('menu-principal').classList.remove('oculto');
}

function alternarSonido() {
    sonidoHabilitado = !sonidoHabilitado;
    const btn = document.getElementById('btn-sonido-toggle');
    btn.textContent = sonidoHabilitado ? '🔊' : '🔇';
    if (sonidoHabilitado) sonidoTap();
}

function mostrarVictoria() {
    sonidoFanfarria();
    lanzarConfeti();
    document.getElementById('modal-victoria').classList.remove('oculto');
    const btnSig = document.getElementById('btn-siguiente-nivel');
    if (nivelActual === 1) {
        btnSig.classList.remove('oculto');
    } else {
        btnSig.classList.add('oculto');
    }
}

function siguienteNivelVictoria() {
    document.getElementById('modal-victoria').classList.add('oculto');
    cambiarNivel(2);
}

function reiniciarNivelVictoria() {
    document.getElementById('modal-victoria').classList.add('oculto');
    estrellas = 0;
    actualizarEstrellas();
    nuevoProblema();
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarEstrellas();
});