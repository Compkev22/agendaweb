
import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import {viewContacts, viewNewContact} from "./components/layout/nav/NavControlers.js";
// App
let app = document.getElementById("app");

//section menú
let nav = document.getElementById("nav");
//agregar botones
nav.appendChild(Button(
    "Agenda", 
    "agenda", 
    "user", 
    viewContacts
));
nav.appendChild(Button(
    "Crear Contacto", 
    "plus", 
    "plus",
    viewNewContact
));
nav.appendChild(Button("ToDoList", "todolist", "agenda"));
nav.appendChild(Button("Crear tarea", "plus", "plus"));

//section container
let container = document.getElementById("container");

container.innerHTML = "";   
container.appendChild(Contactos());
//container.appendChild(formulario());

