document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById('formularioContacto');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        const privacidadAceptada = document.querySelector('input[name="politica-privacidad"]').checked;

        if (!nombre || !apellidos || !correo || !telefono || !mensaje || !privacidadAceptada) {
            alert("Por favor, complete todos los campos requeridos y acepte la política de privacidad.");
            return;
        }

        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexCorreo.test(correo)) {
            alert("Por favor, introduzca un correo electrónico válido.");
            return;
        }

        const regexTelefono = /^[0-9]{10}$/;
        if (!regexTelefono.test(telefono)) {
            alert("Por favor, introduzca un número de teléfono válido (10 dígitos).");
            return;
        }

        alert(`Formulario enviado correctamente. ¡Gracias por contactarnos, ${nombre}!`);
        formulario.reset(); 
    });
});
