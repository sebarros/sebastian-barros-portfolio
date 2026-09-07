# Sebastián Barros — Portafolio Personal

Portafolio web personal desarrollado para presentar mi perfil como estudiante de Ingeniería Informática, mis habilidades técnicas, tecnologías que estoy aprendiendo y algunos de los proyectos que he realizado.

El sitio cuenta con un diseño moderno, responsivo y adaptable a dispositivos móviles, además de funcionalidades como cambio de tema, menú responsive, navegación con desplazamiento suave y formulario de contacto con validación.

## 🛠️ Tecnologías utilizadas

### Frontend

- **HTML5:** estructura y contenido del sitio.
- **CSS3:** estilos, diseño responsive, animaciones y temas visuales.
- **JavaScript:** funcionalidades e interacción con el usuario.

### Librerías y recursos

- **Font Awesome 6:** iconos utilizados en botones, tecnologías y enlaces.
- **Google Fonts:** tipografías `Space Grotesk` e `Inter`.
- **FormSubmit:** servicio utilizado para gestionar el envío del formulario de contacto.

## 📂 Estructura del proyecto

```text
portfolio/
│
├── index.html
├── styles.css
├── script.js
├── README.md
│
└── img/
    ├── image.png
    ├── doors.png
    ├── ripley.jpg
    ├── ip.jpg
    └── bits.png
```

### Archivos principales

| Archivo | Descripción |
|---|---|
| `index.html` | Contiene la estructura y contenido del portafolio. |
| `styles.css` | Contiene los estilos, diseño responsive y temas claro/oscuro. |
| `script.js` | Implementa las funcionalidades e interacciones del sitio. |
| `README.md` | Documentación del proyecto. |
| `img/` | Contiene las imágenes utilizadas en el sitio. |

## Funcionalidades

### Cambio de tema

El botón ubicado en el encabezado permite cambiar entre:

- 🌙 Tema oscuro.
- ☀️ Tema claro.

### Navegación

El menú permite desplazarse entre las diferentes secciones del portafolio mediante enlaces internos.

En dispositivos móviles, el menú se transforma en un menú desplegable mediante el botón hamburguesa.

### Validación del formulario

El formulario de contacto valida:

- Nombre con al menos 3 caracteres.
- Correo electrónico con formato válido.
- Mensaje con al menos 10 caracteres.

Si los datos son válidos, el formulario se envía mediante **FormSubmit**.

## Diseño responsive

El sitio está diseñado para adaptarse a diferentes tamaños de pantalla mediante `media queries`.

Se consideran principalmente:

- Escritorios.
- Tablets.
- Smartphones.
- Pantallas pequeñas.

Los elementos del sitio reorganizan su distribución automáticamente para facilitar la navegación desde dispositivos móviles.