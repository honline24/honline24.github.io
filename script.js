document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("consultaForm");

    form.addEventListener("submit", function(event) {
        const requiredFields = [
            form.correo,
            form.nombre,
            form.apellido,
            form.dni,
            form.telefono,
            form.provincia,
            form.direccion,
            form.fecha_nacimiento,
            form.motivo,
            ...document.querySelectorAll('input[name="cardiovasculares"], input[name="renales"], input[name="neurologicas"], input[name="hematologicas"], input[name="autoinmunes"], input[name="respiratorias"], input[name="musculoesqueleticas"], input[name="vista"], input[name="digestivas"], input[name="endocrinas"]'),
            form.alergia,
            form.veracidad,
            form.terminos
        ];

        const isValid = requiredFields.every(field => {
            if (field.type === 'radio') {
                return Array.from(document.getElementsByName(field.name)).some(radio => radio.checked);
            }
            return field.value.trim() !== '';
        });

        if (!isValid) {
            event.preventDefault();
            alert("Por favor, complete todos los campos obligatorios antes de enviar el formulario.");
        }
    });
});

