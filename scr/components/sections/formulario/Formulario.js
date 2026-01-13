let formulario = function () {

    let formulario = document.createElement("section");

    let h3 = document.createElement("h3");
    h3.innerHTML ="Crear Contacto";

    let nombre = document.createElement("input");
    nombre.type = "text";
    nombre.placeholder = "Nombre";

    let telefono = document.createElement("input");
    telefono.type = "text";
    telefono.placeholder = "Teléfono";

    let button = document.createElement("button");
    button.innerHTML = "Guardar Contacto";

    formulario.appendChild(h3);
    formulario.appendChild(nombre);
    formulario.appendChild(telefono);
    formulario.appendChild(button);

    return formulario;
}

export { formulario };

