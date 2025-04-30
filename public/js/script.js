//Botones que aparezcan y desaparezcan
document.addEventListener("DOMContentLoaded", function() {
    const mostrarButton = document.getElementById("mostrarInformacion");
    const ocultarButton = document.getElementById("ocultarInformacion");
    const informacionAdicional = document.getElementById("informacionAdicional");

    mostrarButton.addEventListener("click", function() {
        informacionAdicional.style.display = "block";
        mostrarButton.style.display = "none";
        ocultarButton.style.display = "block"; 
    });

    ocultarButton.addEventListener("click", function() {
        informacionAdicional.style.display = "none";
        ocultarButton.style.display = "none";
        mostrarButton.style.display = "block";
    });
});

//Alert y texto en el formulario
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".formulario_contacto");
    const mensajeError = document.getElementById("mensajeError");

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const numero = document.getElementById("number").value;
        const mensaje = document.getElementById("message").value;

        if (!nombre || !email || !numero || !mensaje) {
            mensajeError.style.display = "block";
        } else {
            mensajeError.style.display = "none";
            alert("Formulario enviado");
            formulario.reset();
        }
    });
});

