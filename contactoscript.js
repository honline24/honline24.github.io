const form = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');

form.addEventListener('input', function() {
    let allFieldsFilled = true;
    Array.from(form.elements).forEach(function(element) {
        if (element.type !== "submit" && element.value === "") {
            allFieldsFilled = false;
        }
    });
    submitButton.disabled = !allFieldsFilled;
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado con éxito!');
    // Aquí puedes agregar el código para enviar el formulario a tu servidor.
});
