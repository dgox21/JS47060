document.addEventListener("DOMContentLoaded", function () {
    const prestamosTableBody = document.getElementById("prestamosTableBody");

    // Obtenemos los préstamos localstorage
    const prestamos = JSON.parse(localStorage.getItem('prestamos')) || [];

    // foreach de la tabla
    prestamos.forEach(function (prestamo) {
        const row = document.createElement("tr");
        const objetoCell = document.createElement("td");
        objetoCell.textContent = prestamo.objeto;
        const aQuienCell = document.createElement("td");
        aQuienCell.textContent = prestamo.aQuien;
        const celularCell = document.createElement("td");
        celularCell.textContent = prestamo.celular;
        row.appendChild(objetoCell);
        row.appendChild(aQuienCell);
        row.appendChild(celularCell);
        prestamosTableBody.appendChild(row);
    });
});

