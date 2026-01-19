import { ContactList } from "../contactos/db.js";
import { saveContactsToStorage } from "../../common/localStorage/Storage.js";


let formulario = function () {

    let formulario = document.createElement("form");

    let h3 = document.createElement("h3");
    h3.innerHTML ="Crear Contacto";

    let nombre = document.createElement("input");
    nombre.type = "text";
    nombre.placeholder = "Ej: Lester Velásquez";

    let telefono = document.createElement("input");
    telefono.type = "text";
    telefono.placeholder = "Ej: 3125 0484";

    let button = document.createElement("button");
    button.innerHTML = "Guardar Contacto";

    formulario.appendChild(h3);
    formulario.appendChild(nombre);
    formulario.appendChild(telefono);
    formulario.appendChild(button);


    //Programacion del formulario

    formulario.addEventListener("submit", (e) => {
      e.preventDefault();  
    let contacto = {
        nombre: nombre.value,
        telefono: telefono.value
    };

    nombre.value = "";
    telefono.value = "";

    console.log("Nuevo contacto:", contacto);
    ContactList.push(contacto);
    saveContactsToStorage(ContactList);
    alert("Contacto guardado exitosamente");
});

    return formulario;
}

export { formulario };

