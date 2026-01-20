import { ContactList } from "../contactos/db.js";
import { saveContactsToStorage } from "../../common/localStorage/Storage.js";


let formulario = function () {

    let formulario = document.createElement("form");

    let h3 = document.createElement("h3");
    h3.innerHTML ="Crear Contacto Completo";

    let nombre = document.createElement("input");
    nombre.type = "text";
    nombre.placeholder = "Alias (Ej: Tía Maria)";
    nombre.required = true;

    let nombreCompleto = document.createElement("input");
    nombreCompleto.type = "text";
    nombreCompleto.placeholder = "Nombre Completo Real";


    let telefono = document.createElement("input");
    telefono.type = "text"; 
    telefono.placeholder = "Teléfono Principal";
    telefono.required = true;



    let ubicacion = document.createElement("input");
    ubicacion.type = "text";
    ubicacion.placeholder = "Ubicación / Ciudad";


    let tipo = document.createElement("input");
    tipo.type = "text";
    tipo.placeholder = "Tipo (Ej: Familia, Trabajo, Amigo)";

    let button = document.createElement("button");
    button.innerHTML = "Guardar Contacto";


    formulario.appendChild(h3);
    formulario.appendChild(nombre);
    formulario.appendChild(nombreCompleto);
    formulario.appendChild(telefono);
    formulario.appendChild(ubicacion);
    formulario.appendChild(tipo);
    formulario.appendChild(button);


    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        

        let contacto = {
            nombre: nombre.value,                  
            nombreCompleto: nombreCompleto.value,   
            telefono: telefono.value,               
            ubicacion: ubicacion.value,
            tipo: tipo.value
        };

   
        nombre.value = "";
        nombreCompleto.value = "";
        telefono.value = "";
        ubicacion.value = "";
        tipo.value = "";

        console.log("Nuevo contacto creado:", contacto);
        
        ContactList.push(contacto);
        saveContactsToStorage(ContactList);
        
        alert("Contacto guardado exitosamente");
    });

    return formulario;
}

export { formulario };