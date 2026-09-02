"use strict";

const ICONO_LUNA = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

const ICONO_SOL = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="4.5"/>
        <path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8 6 18M18 6l1.8-1.8" stroke-linecap="round"/>
    </svg>`;

const ICONO_MENU = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" stroke-linecap="round"/>
    </svg>`;

const ICONO_CERRAR = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <path d="M5 5l14 14M19 5 5 19" stroke-linecap="round"/>
    </svg>`;

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

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("claro");
    const temaClaro = document.body.classList.contains("claro");
    if (temaClaro) {
        btnTema.innerHTML = ICONO_LUNA;
        btnTema.setAttribute("aria-label", "Activar tema oscuro");
    } else {
        btnTema.innerHTML = ICONO_SOL;
        btnTema.setAttribute("aria-label", "Activar tema claro");
    }
});

btnMenu.addEventListener("click", () => {
    navegacion.classList.toggle("activo");
    const menuAbierto = navegacion.classList.contains("activo");
    if (menuAbierto) {
        btnMenu.innerHTML = ICONO_CERRAR;
        btnMenu.setAttribute("aria-label", "Cerrar menú");
    } else {
        btnMenu.innerHTML = ICONO_MENU;
        btnMenu.setAttribute("aria-label", "Abrir menú");
    }
});

const enlacesMenu = document.querySelectorAll(".navegacion a");
enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        navegacion.classList.remove("activo");
        btnMenu.innerHTML = ICONO_MENU;
        btnMenu.setAttribute("aria-label", "Abrir menú");
    });
});

btnTema.innerHTML = ICONO_LUNA;
btnMenu.innerHTML = ICONO_MENU;
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorMensaje.textContent = "";
    estadoFormulario.textContent = "";
    let formularioValido = true;
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

    if (formularioValido) {
        estadoFormulario.textContent =
            "¡Mensaje validado correctamente! Gracias por contactarme.";
        formulario.reset();
    }
});