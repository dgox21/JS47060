const guardarButtonDos = document.getElementById("guardarButtonDos");
const verPrestadosButton = document.getElementById("verPrestados");
const cerrarSesionButton = document.getElementById("cerrarSesionButton");
const irAlInicioButton = document.getElementById("irAlInicioButton");
const validacionMensaje = document.getElementById("validacionMensaje");

guardarButtonDos.addEventListener("click", function () {
    const objeto = document.getElementById("objetoInput").value;
    const aQuien = document.getElementById("aQuienInput").value;
    const celular = document.getElementById("celularInput").value;

    if (!objeto || !aQuien || !celular) {
        validacionMensaje.textContent = "Por favor, completa todos los campos.";
    } else {
        validacionMensaje.textContent = "";

        const prestamo = {
            objeto: objeto,
            aQuien: aQuien,
            celular: celular,
        };

        let prestamos = JSON.parse(localStorage.getItem('prestamos')) || [];
        prestamos.push(prestamo);
        localStorage.setItem('prestamos', JSON.stringify(prestamos));

        validacionMensaje.textContent = "PRÉSTAMO GUARDADO";

        document.getElementById("objetoInput").value = "";
        document.getElementById("aQuienInput").value = "";
        document.getElementById("celularInput").value = "";
    }
});

verPrestadosButton.addEventListener("click", function () {
    window.location.href = "verprestados.html"; 
});

cerrarSesionButton.addEventListener("click", function () {
    localStorage.removeItem('usuario');
    localStorage.removeItem('prestamos');
    window.location.href = "index.html"; 
});

irAlInicioButton.addEventListener("click", function () {
    window.location.href = "index.html"; 
});
