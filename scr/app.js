
if (!sessionStorage.getItem("usuarioLogueado")) {
    window.location.href = "../index.html";
}

import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import {viewContacts, viewNewContact, viewTareas, viewNewTarea} from "./components/layout/nav/NavControlers.js";

let app = document.getElementById("app");


let nav = document.getElementById("nav");


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


let container = document.getElementById("container");

container.innerHTML = "";   
container.appendChild(Contactos());

async function tareas() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        let r = await data.json();
        console.log(r);

    } catch (error) {
        console.log(error);
        
    }
    
}
tareas();

console.log("Completado.")