function calcularMedia() {
    let notas = [];
    for (let i = 1; i <= 6; i++) {
        let nota = parseFloat(prompt(`Nota ${i} (0-10):`));
        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Por favor, introduce una nota válida entre 0 y 10.");
            i--;
        } else {
            notas.push(nota);
        }
    }
    let suma = notas.reduce((acc, curr) => acc + curr, 0);
    return (suma / notas.length).toFixed(2);
}

function obtenerCorrespondencia(nota) {
    if (nota < 3) {
        return "Muy deficiente";
    } else if (nota < 5) {
        return "Insuficiente";
    } else if (nota < 6) {
        return "Suficiente";
    } else if (nota < 7) {
        return "Bien";
    } else if (nota < 9) {
        return "Notable";
    } else {
        return "Sobresaliente";
    }
}

document.getElementById('calcularMedia').onclick = function() {
    let media = calcularMedia();
    document.getElementById('resultado').textContent = `La nota media es: ${media}`;
};

document.getElementById('mostrarCorrespondencia').onclick = function() {
    let media = parseFloat(document.getElementById('resultado').textContent.split(': ')[1]);
    if (!isNaN(media)) {
        let correspondencia = obtenerCorrespondencia(media);
        document.getElementById('resultado').textContent += ` corresponde a ${correspondencia}`;
    } else {
        alert("Primero debes calcular la media.");
    }
};
