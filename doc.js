// SISTEMA "MAÑANATEDEVUELVO"

function registrarUsuario() {
    let nombre = "";
    let dni = "";

    nombre = prompt("¡HOLA!, ¿CUÁL ES TU NOMBRE?");
    // Ciclo de registro //

    if (nombre === null) {
        alert("Has cancelado. NO HEMOS PODIDO REGISTRARTE.");
        return;
    }

    while (true) {
        if (!/^[a-zA-Z\s]+$/.test(nombre) || nombre.trim() === "") {
            alert("Tu nombre solo debe contener letras.");
            nombre = prompt("Por favor, ingresa tu nombre nuevamente:");

            if (nombre === null) {
                alert("Has cancelado. NO HEMOS PODIDO REGISTRARTE.");
                return;
            }
        } else {
            break;
        }
    }

    while (true) {
        dni = prompt("Por favor, " + nombre + ", INGRESA TU DNI");

        if (dni === null) {
            alert("Has cancelado. NO HEMOS PODIDO REGISTRARTE.");
            return;
        }

        if (/^\d+$/.test(dni) && dni.trim() !== "" && dni.length === 8) {
            alert("¡Bienvenido " + nombre + "! YA PUEDES EMPEZAR A PRESTAR TUS COSAS ;)");

            while (true) {
                // Crear el objeto de usuario //
                const usuario = {
                    nombre: nombre,
                    dni: dni,
                    prestamos: [] // arreglo para almacenar objetos prestados //
                };

                let personaPrestamo = {
                    nombre: "",
                    celular: ""
                };

                while (true) {
                    // Agregar nombre y número de celular de la persona que realiza el préstamo. //
                    personaPrestamo.nombre = prompt("A quien le realizarás el préstamo? (Solo letras):");

                    if (personaPrestamo.nombre === null) {
                        alert("Has cancelado. NO HEMOS PODIDO REGISTRAR EL NOMBRE.");
                        return;
                    }

                    if (/^[a-zA-Z\s]+$/.test(personaPrestamo.nombre) && personaPrestamo.nombre.trim() !== "") {
                        break;
                    } else {
                        alert("El nombre de la persona solo debe contener letras.");
                    }
                }

                // Validar que el número de celular
                while (true) {
                    const celularInput = prompt("Ingresa el Número de celular de la persona (solo números):");

                    if (celularInput === null) {
                        alert("Has cancelado. NO HEMOS PODIDO REGISTRAR EL CELULAR.");
                        return;
                    }

                    if (/^\d+$/.test(celularInput)) {
                        personaPrestamo.celular = celularInput;
                        break;
                    } else {
                        alert("El número de celular debe contener solo números.");
                    }
                }

                // Función para agregar el préstamo //
                function agregarPrestamo(quePresto, fecha, persona) {
                    const prestamo = {
                        quePresto: quePresto, //que se prestará?
                        fecha: fecha, // que fecha?
                        persona: persona // a quien?
                    };
                    usuario.prestamos.push(prestamo);
                }

                // Registrar prestamos //
                const quePresto = prompt("¿Qué vas a prestar hoy?");
                const fechaPrestamo = new Date().toLocaleDateString();
                agregarPrestamo(quePresto, fechaPrestamo, personaPrestamo);

                console.log("Prestamo registrado:");
                console.log(usuario.prestamos);

                alert("Has registrado un préstamo de " + quePresto + " en la fecha " + fechaPrestamo + " a " + personaPrestamo.nombre + " (Celular: " + personaPrestamo.celular + ")");

                // Función de o.s para la carga de un nuevo prestamo //
                function cargarNuevoPrestamo() {
                    const confirmacion = confirm("¿Deseas cargar un nuevo préstamo para otra persona?");
                    return confirmacion;
                }

                if (!cargarNuevoPrestamo()) {
                    return; // Salir del programa
                }
            }
        } else {
            alert("El DNI ingresado no es válido. Debe contener exactamente 8 caracteres y solo números.");
        }
    }
}

registrarUsuario();

