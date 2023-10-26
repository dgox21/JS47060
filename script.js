document.addEventListener("DOMContentLoaded", function () {
    const registrarUsuarioButton = document.getElementById("registrarUsuarioButton");
    const registroForm = document.getElementById("registroFormulario");

    function mostrarMensaje(texto) {
        alert(texto);
    }

    function registrarNuevoUsuario(event) {
        event.preventDefault();

        const nombreInput = document.getElementById("nombreInput");
        const dniInput = document.getElementById("dniInput");

        const nombre = nombreInput.value.trim();
        const dni = dniInput.value.trim();

        if (!nombre || !dni) {
            mostrarMensaje("Por favor, completa todos los campos.");
            return;
        }

        if (!/^[a-zA-Z\s]+$/.test(nombre)) {
            mostrarMensaje("El nombre solo debe contener letras.");
            return;
        }

        if (!/^\d{8}$/.test(dni)) {
            mostrarMensaje("El DNI ingresado no es válido. Debe contener exactamente 8 caracteres y solo números.");
            return;
        }

        const usuario = {
            nombre,
            dni,
            prestamos: []
        };

        localStorage.setItem('usuario', JSON.stringify(usuario));

        mostrarMensaje("¡Registro exitoso! Nombre: " + nombre + ", DNI: " + dni);

        registroForm.reset();

        // Redirige al usuario a la página de préstamos
        window.location.href = "prestamos.html";
    }

    registrarUsuarioButton.addEventListener("click", registrarNuevoUsuario);
});
