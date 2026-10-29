<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manitas Matemáticas</title>
    <style>
        * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Comic Sans MS", "Fredoka", "Arial Rounded MT Bold", sans-serif;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}

body {
    background: linear-gradient(135deg, #E0F2FE, #EDE9FE, #FEF3C7);
    min-height: 100vh;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contenedor {
    width: 100%;
    max-width: 650px;
    background: #FFFFFF;
    border-radius: 30px;
    padding: 25px 20px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    border: 3px solid #FDE68A;
    position: relative;
    overflow: hidden;
}

/* === BARRA SUPERIOR === */
.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
}

.btn-nav {
    background: #F1F5F9;
    border: 2px solid #CBD5E1;
    padding: 8px 16px;
    border-radius: 14px;
    font-size: 1rem;
    font-weight: bold;
    color: #334155;
    cursor: pointer;
    transition: all 0.15s;
}

.btn-nav:hover {
    background: #E2E8F0;
}

.btn-nav:active {
    transform: translateY(2px);
}

.btn-sonido {
    background: #FEF3C7;
    border: 2px solid #FCD34D;
    font-size: 1.3rem;
    padding: 6px 12px;
    border-radius: 14px;
    cursor: pointer;
}

/* Selector de Niveles */
.selector-nivel {
    display: flex;
    background: #F8FAFC;
    border: 2px solid #FCD34D;
    border-radius: 16px;
    padding: 3px;
    gap: 4px;
}

.btn-lvl {
    border: none;
    background: transparent;
    padding: 6px 12px;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: bold;
    color: #475569;
    cursor: pointer;
}

.btn-lvl.activo {
    background: #F59E0B;
    color: white;
}

/* Estrellas */
.estrellas-caja {
    display: flex;
    gap: 4px;
    font-size: 1.2rem;
    background: #FFFBEB;
    border: 2px solid #FDE68A;
    padding: 4px 10px;
    border-radius: 16px;
}

/* === MENÚ PRINCIPAL === */
.titulo-principal {
    text-align: center;
    color: #E11D48;
    font-size: 2.3rem;
    margin-bottom: 6px;
}

.subtitulo {
    text-align: center;
    font-size: 1.2rem;
    color: #475569;
    margin-bottom: 25px;
    font-weight: bold;
}

.menu-tarjetas {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.tarjeta-actividad {
    border-radius: 22px;
    padding: 18px 20px;
    box-shadow: 0 6px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s;
    border: none;
    width: 100%;
    color: white;
    font-size: 1.8rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.tarjeta-actividad:active {
    transform: translateY(4px);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
}

.btn-contar {
    background: linear-gradient(90deg, #38BDF8, #0284C7);
    border-bottom: 6px solid #0369A1;
}

.btn-sumar {
    background: linear-gradient(90deg, #10B981, #059669);
    border-bottom: 6px solid #047857;
}

.btn-restar {
    background: linear-gradient(90deg, #F43F5E, #E11D48);
    border-bottom: 6px solid #BE123C;
}

/* Sub-botones de niveles en el menú */
.fila-subniveles {
    display: flex;
    gap: 8px;
    margin-top: -6px;
    margin-bottom: 10px;
}

.btn-subnivel {
    flex: 1;
    background: #FFFFFF;
    border: 2px solid #E2E8F0;
    padding: 8px;
    border-radius: 12px;
    font-size: 0.95rem;
    font-weight: bold;
    color: #334155;
    cursor: pointer;
}

.btn-subnivel:hover {
    background: #F8FAFC;
    border-color: #CBD5E1;
}

/* === ZONA DE JUEGO / ECUACIÓN === */
.ecuacion-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 2.8rem;
    font-weight: bold;
    margin: 15px 0 20px 0;
    padding: 10px;
    background: #F8FAFC;
    border-radius: 20px;
    border: 2px dashed #CBD5E1;
}

.num-color1 { color: #D97706; }
.num-color2 { color: #7C3AED; }
.simbolo { color: #059669; }
.simbolo-resta { color: #E11D48; }

.caja-interrogacion {
    background: white;
    padding: 0 16px;
    border-radius: 16px;
    border: 3px solid #38BDF8;
    color: #0284C7;
    min-width: 65px;
    text-align: center;
}

/* === MANO DISEÑO EXACTO === */
.fila-manos {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    gap: 20px;
    flex-wrap: wrap;
}

.mano-contenedor {
    text-align: center;
}

.etiqueta-mano {
    font-size: 1.1rem;
    color: #64748B;
    margin-bottom: 10px;
    font-weight: bold;
}

.mano-bonita {
    position: relative;
    width: 180px;
    height: 240px;
    margin: 0 auto;
    cursor: pointer;
}

.mano-espejo {
    transform: scaleX(-1);
}

.dedo-estilo {
    position: absolute;
    background: linear-gradient(90deg, #FFD4B9, #FFE0CC);
    border-radius: 20px;
    border: 2px solid #F5B894;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: bottom center;
    box-shadow: inset -3px 0 5px rgba(0,0,0,0.05), 2px 2px 4px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
}

.dedo-estilo.abajo {
    transform: rotate(90deg) scale(0.95);
    opacity: 0.45;
}

.dedo-indice { height: 95px; width: 32px; top: 35px; left: 22px; }
.dedo-medio  { height: 110px; width: 34px; top: 16px; left: 52px; }
.dedo-anular { height: 98px; width: 32px; top: 22px; left: 84px; }
.dedo-meñique{ height: 80px; width: 28px; top: 45px; left: 114px; }
.dedo-pulgar { height: 70px; width: 30px; top: 100px; left: 0; transform: rotate(-45deg); border-radius: 20px 20px 15px 15px; }

.dedo-pulgar.abajo { transform: rotate(30deg) scale(0.95); }
.dedo-indice.abajo { transform: rotate(180deg) scale(0.95); top: 5px; }
.dedo-medio.abajo  { transform: rotate(180deg) scale(0.95); top: -20px; }
.dedo-anular.abajo { transform: rotate(180deg) scale(0.95); top: -3px; }
.dedo-meñique.abajo{ transform: rotate(180deg) scale(0.95); top: 25px; }

.palma-bonita {
    position: absolute;
    bottom: 10px;
    left: 15px;
    width: 150px;
    height: 110px;
    background: linear-gradient(180deg, #FFD4B9, #FFCCB3);
    border-radius: 75px 75px 55px 55px;
    border: 2px solid #F5B894;
    box-shadow: inset 0 -10px 15px rgba(0,0,0,0.05);
}

.linea-palma {
    position: absolute;
    width: 80px;
    height: 2px;
    background: #F5B894;
    top: 40px;
    left: 35px;
    border-radius: 1px;
    transform: rotate(-10deg);
}

.badge-conteo {
    margin-top: 10px;
    display: inline-block;
    background: #FEF3C7;
    border: 2px solid #FCD34D;
    padding: 4px 14px;
    border-radius: 20px;
    font-size: 1.1rem;
    font-weight: bold;
    color: #92400E;
}

.dedo-tachado {
    color: #DC2626;
    font-weight: bold;
    font-size: 16px;
    pointer-events: none;
}

/* === BOTONES DE RESPUESTA NUMÉRICOS === */
.opciones-grid {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.btn-opcion {
    width: 65px;
    height: 65px;
    font-size: 2rem;
    font-weight: bold;
    border: none;
    border-radius: 18px;
    background: #38BDF8;
    color: white;
    cursor: pointer;
    box-shadow: 0 5px 0 #0284C7;
    transition: transform 0.15s, box-shadow 0.15s;
}

.btn-opcion:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #0284C7;
}

/* === MODAL DE FELICIDADES === */
.modal-victoria {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 23, 42, 0.65);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 100;
}

.caja-victoria {
    background: white;
    padding: 30px;
    border-radius: 30px;
    text-align: center;
    max-width: 400px;
    width: 100%;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border: 4px solid #FCD34D;
    animation: popIn 0.3s ease;
}

.btn-modal {
    width: 100%;
    padding: 14px;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 16px;
    margin-top: 10px;
    cursor: pointer;
}

.btn-verde {
    background: #10B981;
    color: white;
    border-bottom: 4px solid #047857;
}

.btn-amarillo {
    background: #F59E0B;
    color: white;
    border-bottom: 4px solid #B45309;
}

.btn-gris {
    background: #E2E8F0;
    color: #334155;
}

/* Retroalimentación visual */
.feedback-badge {
    text-align: center;
    font-size: 1.4rem;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 18px;
    margin: 15px auto 0 auto;
    display: inline-block;
    animation: popIn 0.3s ease;
}

.feedback-bien {
    background: #D1FAE5;
    color: #065F46;
    border: 2px solid #6EE7B7;
}

.feedback-mal {
    background: #FFE4E6;
    color: #9F1239;
    border: 2px solid #FDA4AF;
    animation: wiggle 0.3s ease;
}

.oculto {
    display: none !important;
}

@keyframes popIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

@keyframes wiggle {
    0%, 100% { transform: rotate(0); }
    25% { transform: rotate(-5deg); }
    75% { transform: rotate(5deg); }
}

#confetti-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 999;
}
    </style>
</head>
<body>

    <!-- Canvas para la animación de confeti -->
    <canvas id="confetti-canvas"></canvas>

    <div class="contenedor">
        
        <!-- PANTALLA 1: MENÚ PRINCIPAL -->
        <div id="menu-principal">
            <h1 class="titulo-principal">Aprende Conmigo</h1>
            <p class="subtitulo">¿Qué quieres aprender hoy?</p>

            <div class="menu-tarjetas">
                <!-- BOTÓN CONTAR -->
                <div>
                    <button class="tarjeta-actividad btn-contar" onclick="iniciarActividad('contar', 1)">
                        <span>🔢 ¡CONTAR!</span>
                        <span>👉</span>
                    </button>
                    <div class="fila-subniveles">
                        <button class="btn-subnivel" onclick="iniciarActividad('contar', 1)">Nivel 1 (1 a 5)</button>
                        <button class="btn-subnivel" onclick="iniciarActividad('contar', 2)">Nivel 2 (1 a 10)</button>
                    </div>
                </div>

                <!-- BOTÓN SUMAR -->
                <div>
                    <button class="tarjeta-actividad btn-sumar" onclick="iniciarActividad('sumar', 1)">
                        <span>➕ ¡SUMAR!</span>
                        <span>👉</span>
                    </button>
                    <div class="fila-subniveles">
                        <button class="btn-subnivel" onclick="iniciarActividad('sumar', 1)">Nivel 1 (Fácil)</button>
                        <button class="btn-subnivel" onclick="iniciarActividad('sumar', 2)">Nivel 2 (Hasta 10)</button>
                    </div>
                </div>

                <!-- BOTÓN RESTAR -->
                <div>
                    <button class="tarjeta-actividad btn-restar" onclick="iniciarActividad('restar', 1)">
                        <span>➖ ¡RESTAR!</span>
                        <span>👉</span>
                    </button>
                    <div class="fila-subniveles">
                        <button class="btn-subnivel" onclick="iniciarActividad('restar', 1)">Nivel 1 (Fácil)</button>
                        <button class="btn-subnivel" onclick="iniciarActividad('restar', 2)">Nivel 2 (Hasta 10)</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- PANTALLA 2: ZONA DE JUEGO -->
        <div id="seccion-juego" class="oculto">
            
            <!-- Barra superior -->
            <div class="top-bar">
                <button class="btn-nav" onclick="volverAlMenu()">← Menú</button>
                
                <div class="selector-nivel">
                    <button id="btn-lvl1" class="btn-lvl activo" onclick="cambiarNivel(1)">Nivel 1</button>
                    <button id="btn-lvl2" class="btn-lvl" onclick="cambiarNivel(2)">Nivel 2</button>
                </div>

                <div class="estrellas-caja">
                    <span id="estrellas-contador">☆☆☆☆☆</span>
                </div>

                <button id="btn-sonido-toggle" class="btn-sonido" onclick="alternarSonido()">🔊</button>
            </div>

            <!-- Ecuación gigante (para suma y resta) -->
            <div class="ecuacion-visual" id="ecuacion-caja">
                <span class="num-color1" id="n1">2</span>
                <span id="simbolo-op" class="simbolo">➕</span>
                <span class="num-color2" id="n2">3</span>
                <span>=</span>
                <span class="caja-interrogacion" id="resultado-preview">?</span>
            </div>

            <!-- Manos del diseño original -->
            <div class="fila-manos">
                <!-- Mano 1 -->
                <div class="mano-contenedor" id="contenedor-mano1">
                    <div class="etiqueta-mano">Mano 1</div>
                    <div class="mano-bonita" id="mano1">
                        <div class="dedo-estilo dedo-indice" onclick="toggleDedo(0, 1)"></div>
                        <div class="dedo-estilo dedo-medio"  onclick="toggleDedo(1, 1)"></div>
                        <div class="dedo-estilo dedo-anular" onclick="toggleDedo(2, 1)"></div>
                        <div class="dedo-estilo dedo-meñique" onclick="toggleDedo(3, 1)"></div>
                        <div class="dedo-estilo dedo-pulgar" onclick="toggleDedo(4, 1)"></div>
                        <div class="palma-bonita">
                            <div class="linea-palma"></div>
                        </div>
                    </div>
                    <div class="badge-conteo">🖐️ <span id="cont1">0</span></div>
                </div>

                <!-- Mano 2 -->
                <div class="mano-contenedor" id="contenedor-mano2">
                    <div class="etiqueta-mano">Mano 2</div>
                    <div class="mano-bonita mano-espejo" id="mano2">
                        <div class="dedo-estilo dedo-indice" onclick="toggleDedo(0, 2)"></div>
                        <div class="dedo-estilo dedo-medio"  onclick="toggleDedo(1, 2)"></div>
                        <div class="dedo-estilo dedo-anular" onclick="toggleDedo(2, 2)"></div>
                        <div class="dedo-estilo dedo-meñique" onclick="toggleDedo(3, 2)"></div>
                        <div class="dedo-estilo dedo-pulgar" onclick="toggleDedo(4, 2)"></div>
                        <div class="palma-bonita">
                            <div class="linea-palma"></div>
                        </div>
                    </div>
                    <div class="badge-conteo">🖐️ <span id="cont2">0</span></div>
                </div>
            </div>

            <!-- Mensaje breve de retroalimentación -->
            <div style="text-align: center;">
                <div id="feedback-mensaje" class="feedback-badge oculto">¡Muy bien! ⭐</div>
            </div>

            <!-- Botones gigantes de opciones numéricas -->
            <div class="opciones-grid" id="caja-opciones"></div>

        </div>

    </div>

    <!-- MODAL DE VICTORIA -->
    <div id="modal-victoria" class="modal-victoria oculto">
        <div class="caja-victoria">
            <div style="font-size: 4.5rem; margin-bottom: 10px;">🏆</div>
            <div style="font-size: 1.8rem; margin-bottom: 5px;">⭐⭐⭐⭐⭐</div>
            <h2 style="font-size: 2rem; color: #1E293B; margin-bottom: 5px;">¡Ganaste! 🎉</h2>
            <p style="color: #64748B; font-weight: bold; margin-bottom: 20px;">¡Completaste todas las rondas!</p>
            
            <button id="btn-siguiente-nivel" class="btn-modal btn-verde" onclick="siguienteNivelVictoria()">¡Ir al Nivel 2! 🚀</button>
            <button class="btn-modal btn-amarillo" onclick="reiniciarNivelVictoria()">Jugar otra vez 🔁</button>
            <button class="btn-modal btn-gris" onclick="volverAlMenu()">Volver al Menú 🏠</button>
        </div>
    </div>

    <script>
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
    </script>
</body>
</html>
