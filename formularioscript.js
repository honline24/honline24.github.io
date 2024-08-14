
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("consultaForm");

    form.addEventListener("submit", function(event) {
        // Prevenir el envío predeterminado del formulario
        event.preventDefault();

        // Obtener todos los elementos que son requeridos
        const requiredFields = [
            form.correo,
            form.nombre,
            form.apellido,
            form.dni,
            form.telefono,
            form.provincia,
            form.direccion,
            form.fecha_nacimiento,
            form.obrasocial,
            form.afiliado,
            form.motivo,
            form.cardiovasculares,
            form.renales,
            form.neurologicas,
            form.hematologicas,
            form.autoinmunes,
            form.respiratorias,
            form.musculoesqueleticas,
            form.vista,
            form.digestivas,
            form.endocrinas,
            form.alergia,
            form.veracidad,
            form.terminos
        ];

        // Verificar si se llenaron todos los campos requeridos
        const isValid = requiredFields.every(field => {
            if (field.type === 'radio') {
                return Array.from(document.getElementsByName(field.name)).some(radio => radio.checked);
            }
            return field.value.trim() !== '';
        });

        if (!isValid) {
            alert("Por favor, complete todos los campos obligatorios antes de enviar el formulario.");
        } else {
            // Enviar el evento de conversión a Google Analytics
            gtag('event', 'form_submission', {
                'event_category': 'Formulario',
                'event_label': 'Envío del formulario',
                'value': 1
            });

            // Crear un objeto FormData para enviar los datos del formulario
            const formData = new FormData(form);

            // Configurar la solicitud Fetch
            fetch(form.action, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    // Redirigir a la página de confirmación si la solicitud fue exitosa
                    window.location.href = '/confirmacion.html'; // Cambia esta URL a la de tu página de confirmación
                } else {
                    alert("Hubo un problema con el envío del formulario. Por favor, inténtelo de nuevo.");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Hubo un problema con el envío del formulario. Por favor, inténtelo de nuevo.");
            });
        }
    });
});


