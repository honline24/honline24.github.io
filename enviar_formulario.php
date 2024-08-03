<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recolectar los datos del formulario
    $correo = htmlspecialchars($_POST["correo"]);
    $nombre = htmlspecialchars($_POST["nombre"]);
    $apellido = htmlspecialchars($_POST["apellido"]);
    $dni = htmlspecialchars($_POST["dni"]);
    $telefono = htmlspecialchars($_POST["telefono"]);
    $provincia = htmlspecialchars($_POST["provincia"]);
    $direccion = htmlspecialchars($_POST["direccion"]);
    $fecha_nacimiento = htmlspecialchars($_POST["fecha_nacimiento"]);
    $motivo = htmlspecialchars($_POST["motivo"]);
    $medicaciones = htmlspecialchars($_POST["medicaciones"]);
    $cardiovasculares = htmlspecialchars($_POST["cardiovasculares"]);
    $detalles_enfermedades = htmlspecialchars($_POST["detalles_enfermedades"]);
    $alergia = htmlspecialchars($_POST["alergia"]);
    $detalles_alergia = htmlspecialchars($_POST["detalles_alergia"]);
    $veracidad = htmlspecialchars($_POST["veracidad"]);
    $terminos = htmlspecialchars($_POST["terminos"]);

    // Destinatario del correo
    $destinatario = "sofiatripichiofs@gmail.com";

    // Asunto del correo
    $asunto = "Consulta Médica - Formulario Enviado";

    // Contenido del correo
    $mensaje = "
    Correo Electrónico: $correo\n
    Nombre: $nombre\n
    Apellido: $apellido\n
    DNI: $dni\n
    Teléfono: $telefono\n
    Provincia y Ciudad: $provincia\n
    Dirección: $direccion\n
    Fecha de Nacimiento: $fecha_nacimiento\n
    Motivo de Consulta: $motivo\n
    Medicaciones Habituales: $medicaciones\n
    Enfermedades Cardiovasculares: $cardiovasculares\n
    Detalles Enfermedades: $detalles_enfermedades\n
    Alergia a Fármacos: $alergia\n
    Detalles Alergia: $detalles_alergia\n
    Veracidad de los Datos: $veracidad\n
    Aceptación de Términos y Condiciones: $terminos
    ";

    // Encabezados del correo
    $headers = "From: $correo\r\n";
    $headers .= "Reply-To: $correo\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar el correo
    if (mail($destinatario, $asunto, $mensaje, $headers)) {
        echo "El formulario ha sido enviado con éxito.";
    } else {
        echo "Hubo un problema al enviar el formulario. Por favor, intente de nuevo.";
    }
} else {
    echo "Método de solicitud no permitido.";
}
?>
