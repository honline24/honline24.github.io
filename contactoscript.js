ddocument.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        // Obtener todos los elementos que son requeridos
        const requiredFields = [
            form.nombre,
            form.apellido,
            form.telefono,
            form.email,
            form.mensaje
        ];

        // Verificar si se llenaron todos los campos requeridos
        const isValid = requiredFields.every(field => {
            if (field.type === 'radio') {
                return Array.from(document.getElementsByName(field.name)).some(radio => radio.checked);
            }
            return field.value.trim() !== '';
        });

        if (!isValid) {
            event.preventDefault(); // Detener el envío del formulario
            alert("Por favor, complete todos los campos obligatorios antes de enviar el formulario.");
        }
    });
});
