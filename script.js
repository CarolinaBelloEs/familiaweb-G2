function detectarEmocion(emocion) {
    document.getElementById('resultado').textContent = 'Tu emoción: ' + emocion;
}

const emociones = ["Feliz 😄", "Triste 😢", "Enojado 😠", "Asustado 😱", "Calmado 😌"];

function mostrarEmocion() {
    const emocionIndex = Math.floor(Math.random() * emociones.length);
    const emocionSeleccionada = emociones[emocionIndex];
    document.getElementById("emocion").textContent = `Hoy te sientes: ${emocionSeleccionada}`;
}
