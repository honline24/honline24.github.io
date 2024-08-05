// scripts.js
function toggleAnswer(element) {
    const respuesta = element.querySelector('.respuesta');
    if (respuesta.style.display === 'block') {
        respuesta.style.display = 'none';
    } else {
        respuesta.style.display = 'block';
    }
}
