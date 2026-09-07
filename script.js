"use strict";

const btnTema = document.querySelector("#btnTema");
const btnMenu = document.querySelector("#btnMenu");
const navegacion = document.querySelector("#navegacion");
const formulario = document.querySelector("#formularioContacto");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#estadoFormulario");

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("claro");
    const temaClaro = document.body.classList.contains("claro");
    btnTema.innerHTML = temaClaro
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    btnTema.setAttribute("aria-label", temaClaro ? "Activar tema oscuro" : "Activar tema claro"
    );
});

btnMenu.addEventListener("click", () => {
    navegacion.classList.toggle("activo");
    const menuAbierto = navegacion.classList.contains("activo");
    btnMenu.innerHTML = menuAbierto
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    btnMenu.setAttribute("aria-label", menuAbierto ? "Cerrar menú" : "Abrir menú");
});

document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener("click", evento => {
        evento.preventDefault();
        const seccion = document.querySelector(enlace.getAttribute("href"));
        const inicio = window.scrollY;
        const destino = seccion.offsetTop - 90;
        const duracion = 1000;
        const tiempoInicio = performance.now();
        function desplazarse(tiempoActual) {
            const progreso = Math.min(
                (tiempoActual - tiempoInicio) / duracion, 1
            );
            const suavizado = 1 - Math.pow(1 - progreso, 3);
            window.scrollTo(0, inicio + (destino - inicio) * suavizado);
            if (progreso < 1) {
                requestAnimationFrame(desplazarse);
            }
        }
        requestAnimationFrame(desplazarse);
        navegacion.classList.remove("activo");
        btnMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
        btnMenu.setAttribute("aria-label", "Abrir menú");
    });
});

function mostrarError(campo, texto) {
    campo.classList.add("invalido");
    const error = document.querySelector(
        `#error${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)}`
    );
    error.textContent = texto;
}

function limpiarError(campo) {
    campo.classList.remove("invalido");
    const error = document.querySelector(
        `#error${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)}`
    );
    error.textContent = "";
}

formulario.addEventListener("submit", function(evento) {
    const nombreValor = nombre.value.trim();
    const correoValor = correo.value.trim();
    const mensajeValor = mensaje.value.trim();
    let formularioValido = true;
    if (nombreValor.length < 3) {
        mostrarError(nombre, "Ingresa al menos un nombre con 3 caracteres o más.");
        formularioValido = false;
    } else {
        limpiarError(nombre);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoValor)) {
        mostrarError(correo, "Ingresa un correo válido.");
        formularioValido = false;
    } else {
        limpiarError(correo);
    }
    if (mensajeValor.length < 10) {
        mostrarError(mensaje, "Ingresa un mensaje con al menos 10 caracteres o más.");
        formularioValido = false;
    } else {
        limpiarError(mensaje);
    }
    if (!formularioValido) {
        evento.preventDefault();
        resultado.classList.remove("visible");
        return;
    }
    resultado.textContent = "Formulario válido. Enviando mensaje...";
    resultado.classList.add("visible");
});