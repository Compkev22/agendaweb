import { Contactos } from "../../sections/contactos/Contactos.js";
import { formulario } from "../../sections/formulario/Formulario.js";

let container = document.getElementById("container");


let viewContacts = function() {
    container.innerHTML = "";
    container.appendChild(Contactos());

}

let viewNewContact = function() {
    container.innerHTML = "";
    container.appendChild(formulario());
}

export {viewContacts, viewNewContact};