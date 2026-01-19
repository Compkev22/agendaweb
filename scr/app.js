// Verificar si el usuario está logueado
if (!sessionStorage.getItem("usuarioLogueado")) {
    window.location.href = "../index.html";
}

import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import {viewContacts, viewNewContact, viewTareas, viewNewTarea} from "./components/layout/nav/NavControlers.js";

// App
let app = document.getElementById("app");

//section menú
let nav = document.getElementById("nav");

//agregar botones
const btnAgenda = Button(
    "Agenda", 
    "agenda", 
    "user", 
    viewContacts
);
btnAgenda.classList.add("active"); // Botón activo por defecto

nav.appendChild(btnAgenda);
nav.appendChild(Button(
    "Crear Contacto", 
    "plus", 
    "plus",
    viewNewContact
));
nav.appendChild(Button(
    "ToDoList", 
    "todolist", 
    "agenda",
    viewTareas
));
nav.appendChild(Button(
    "Crear tarea", 
    "plus", 
    "plus",
    viewNewTarea
));

// Botón de Cerrar Sesión con ícono
let btnLogout = document.createElement("button");

let iconoLogout = document.createElement("img");
iconoLogout.src = "./assets/icons/log-out.svg";
iconoLogout.alt = "Cerrar sesión";

let textoLogout = document.createElement("span");
textoLogout.textContent = "Cerrar Sesión";

btnLogout.appendChild(iconoLogout);
btnLogout.appendChild(textoLogout);
btnLogout.className = "button btn-logout";

btnLogout.addEventListener("click", () => {
    sessionStorage.removeItem("usuarioLogueado");
    window.location.href = "../index.html";
});

nav.appendChild(btnLogout);

//section container
let container = document.getElementById("container");

container.innerHTML = "";   
container.appendChild(Contactos());