const guardarButton = document.getElementById("guardarButton");
const validacionMensaje = document.getElementById("validacionMensaje");

guardarButton.addEventListener("click", function () {
    const nombre = document.getElementById("nombreInput").value;
    const email = document.getElementById("emailInput").value;
    const celular = document.getElementById("celularInput").value;

    if (!nombre || !email || !celular) {
                validacionMensaje.textContent = "Por favor, completa todos los campos.";
    } else {
        
        const usuarioExistente = localStorage.getItem('usuario');
        if (usuarioExistente) {
            window.location.href = "solicitar.html";
        } else {
           
            const usuario = {
                nombre: nombre,
                email: email,
                celular: celular
            };

            // Convierte JSON y guardar en LocalStorage
            localStorage.setItem('usuario', JSON.stringify(usuario));

            
            window.location.href = "solicitar.html";
        }
    }
});
