
import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { formulario } from "./components/sections/formulario/Formulario.js";
// App
let app = document.getElementById("app");

//section menú
let nav = document.getElementById("nav");
//agregar botones
nav.appendChild(Button("Agenda", "agenda", "user"));
nav.appendChild(Button("Crear Contacto", "plus", "plus"));
nav.appendChild(Button("ToDoList", "todolist", "agenda"));
nav.appendChild(Button("Crear tarea", "plus", "plus"));

//section container
let container = document.getElementById("container");
container.appendChild(Contactos());
container.appendChild(formulario());
