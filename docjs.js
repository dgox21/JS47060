function registrarUsuario() {
  let nombre = "";
  let dni = "";

  while (true) {
    nombre = prompt("¡HOLA!, ¿CUÁL ES TU NOMBRE?");

    if (nombre === null) {
      alert("Has cancelado. NO HEMOS PODIDO REGISTRARTE.");
      return;
    }

    if (/^[a-zA-Z\s]+$/.test(nombre) && nombre.trim() !== "") {
      break;
    } else {
      alert("Tu nombre solo debe contener letras.");
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
      return;
    } else {
      alert("El DNI ingresado no es válido. Debe contener exactamente 8 caracteres y solo números.");
    }
  }
}

registrarUsuario();