"use strict";

// ==========================================
// ELEMENTOS DEL HTML
// ==========================================

const btnTema = document.querySelector("#btnTema");
const btnMenu = document.querySelector("#btnMenu");
const navegacion = document.querySelector("#navegacion");

const formulario = document.querySelector("#formularioContacto");

const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const mensaje = document.querySelector("#mensaje");

const errorNombre = document.querySelector("#errorNombre");
const errorCorreo = document.querySelector("#errorCorreo");
const errorMensaje = document.querySelector("#errorMensaje");

const estadoFormulario = document.querySelector("#estadoFormulario");


// ==========================================
// CAMBIAR TEMA
// ==========================================

btnTema.addEventListener("click", () => {

    document.body.classList.toggle("claro");

    const temaClaro = document.body.classList.contains("claro");

    if (temaClaro) {
        btnTema.textContent = "☾";
        btnTema.setAttribute("aria-label", "Activar tema oscuro");
    } else {
        btnTema.textContent = "☀";
        btnTema.setAttribute("aria-label", "Activar tema claro");
    }

});


// ==========================================
// MENÚ HAMBURGUESA
// ==========================================

btnMenu.addEventListener("click", () => {

    navegacion.classList.toggle("activo");

    const menuAbierto = navegacion.classList.contains("activo");

    if (menuAbierto) {
        btnMenu.textContent = "✕";
        btnMenu.setAttribute("aria-label", "Cerrar menú");
    } else {
        btnMenu.textContent = "☰";
        btnMenu.setAttribute("aria-label", "Abrir menú");
    }

});


// ==========================================
// CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN
// ==========================================

const enlacesMenu = document.querySelectorAll(".navegacion a");

enlacesMenu.forEach(enlace => {

    enlace.addEventListener("click", () => {

        navegacion.classList.remove("activo");

        btnMenu.textContent = "☰";

        btnMenu.setAttribute("aria-label", "Abrir menú");

    });

});


// ==========================================
// VALIDACIÓN DEL FORMULARIO
// ==========================================

formulario.addEventListener("submit", (evento) => {

    // Evita que la página se recargue
    evento.preventDefault();

    // Limpiamos mensajes anteriores
    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorMensaje.textContent = "";

    estadoFormulario.textContent = "";

    let formularioValido = true;


    // ======================================
    // VALIDAR NOMBRE
    // ======================================

    const nombreIngresado = nombre.value.trim();

    if (nombreIngresado === "") {

        errorNombre.textContent =
            "Ingresa tu nombre para continuar.";

        formularioValido = false;

    } else if (nombreIngresado.length < 3) {

        errorNombre.textContent =
            "El nombre debe tener al menos 3 caracteres.";

        formularioValido = false;

    }


    // ======================================
    // VALIDAR CORREO
    // ======================================

    const correoIngresado = correo.value.trim();

    const formatoCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correoIngresado === "") {

        errorCorreo.textContent =
            "Ingresa tu correo electrónico.";

        formularioValido = false;

    } else if (!formatoCorreo.test(correoIngresado)) {

        errorCorreo.textContent =
            "Ingresa un correo válido. Ejemplo: nombre@correo.com";

        formularioValido = false;

    }


    // ======================================
    // VALIDAR MENSAJE
    // ======================================

    const mensajeIngresado = mensaje.value.trim();

    if (mensajeIngresado === "") {

        errorMensaje.textContent =
            "Escribe un mensaje antes de enviarlo.";

        formularioValido = false;

    } else if (mensajeIngresado.length < 10) {

        errorMensaje.textContent =
            "El mensaje debe tener al menos 10 caracteres.";

        formularioValido = false;

    }


    // ======================================
    // RESULTADO DE LA VALIDACIÓN
    // ======================================

    if (formularioValido) {

        estadoFormulario.textContent =
            "¡Mensaje validado correctamente! Gracias por contactarme.";

        formulario.reset();

    }

});


// ==========================================
// MENSAJE EN CONSOLA
// ==========================================

console.log("Portafolio cargado correctamente.");