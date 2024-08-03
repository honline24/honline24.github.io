// Inicializa EmailJS con tu user_id
(function() {
    emailjs.init("69l0IuFagF1765HEdhTqG"); // Reemplaza con tu user_id de EmailJS

    document.getElementById('consultaForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario de forma tradicional

        emailjs.sendForm('service_oo8h5qx', 'template_joc18cy', this)
            .then(function(response) {
                alert('Correo enviado con éxito!');
            }, function(error) {
                alert('Error al enviar el correo: ' + JSON.stringify(error));
            });
    });
})();
