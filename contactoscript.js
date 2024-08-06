document.addEventListener('DOMContentLoaded', function() {
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
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Formulario enviado con éxito!');
                form.reset();
                submitButton.disabled = true;
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert('Ocurrió un error al enviar el formulario.');
                    }
                });
            }
        }).catch(error => {
            alert('Ocurrió un error al enviar el formulario.');
        });
    });
});
