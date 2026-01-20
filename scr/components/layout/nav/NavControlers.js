import { Contactos } from "../../sections/contactos/Contactos.js";
import { formulario } from "../../sections/formulario/Formulario.js";
import { Tareas } from "../../sections/tareas/Tareas.js";
import { formularioTarea } from "../../sections/formulariotarea/FormularioTarea.js";

let container = document.getElementById("container");


const removerClaseActiva = () => {
    const botones = document.querySelectorAll("#nav .button");
    botones.forEach(btn => btn.classList.remove("active"));
};

let viewContacts = function(botonActual) {
    removerClaseActiva();
    if (botonActual) botonActual.classList.add("active");
    
    container.innerHTML = "";
    container.classList.add("fade-in");
    container.appendChild(Contactos());
    
    setTimeout(() => {
        container.classList.remove("fade-in");
    }, 500);
}

let viewNewContact = function(botonActual) {
    removerClaseActiva();
    if (botonActual) botonActual.classList.add("active");
    
    container.innerHTML = "";
    container.classList.add("fade-in");
    container.appendChild(formulario());
    
    setTimeout(() => {
        container.classList.remove("fade-in");
    }, 500);
}

let viewTareas = function(botonActual) {
    removerClaseActiva();
    if (botonActual) botonActual.classList.add("active");
    
    container.innerHTML = "";
    container.classList.add("fade-in");
    container.appendChild(Tareas());
    
    setTimeout(() => {
        container.classList.remove("fade-in");
    }, 500);
}

let viewNewTarea = function(botonActual) {
    removerClaseActiva();
    if (botonActual) botonActual.classList.add("active");
    
    container.innerHTML = "";
    container.classList.add("fade-in");
    container.appendChild(formularioTarea());
    
    setTimeout(() => {
        container.classList.remove("fade-in");
    }, 500);
}

export {viewContacts, viewNewContact, viewTareas, viewNewTarea};