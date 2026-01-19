import { TareaList } from "../tareas/dbTarea.js";
import { saveTareasToStorage } from "../../common/localStorage/Storage.js";

let formularioTarea = function () {
    let formulario = document.createElement("form");

    let h3 = document.createElement("h3");
    h3.innerHTML = "Crear Tarea";

    let nombre = document.createElement("input");
    nombre.type = "text";
    nombre.placeholder = "Nombre de la tarea";
    nombre.required = true;

    let descripcion = document.createElement("textarea");
    descripcion.placeholder = "Descripción de la tarea";
    descripcion.rows = 4;
    descripcion.required = true;

    let prioridad = document.createElement("select");
    prioridad.required = true;
    prioridad.innerHTML = `
        <option value="">Seleccionar prioridad</option>
        <option value="Urgente">Urgente</option>
        <option value="Con tiempo">Con tiempo</option>
    `;

    let dificultad = document.createElement("select");
    dificultad.required = true;
    dificultad.innerHTML = `
        <option value="">Seleccionar dificultad</option>
        <option value="Alta">Alta</option>
        <option value="Media">Media</option>
        <option value="Baja">Baja</option>
    `;

    let button = document.createElement("button");
    button.innerHTML = "Guardar Tarea";

    formulario.appendChild(h3);
    formulario.appendChild(nombre);
    formulario.appendChild(descripcion);
    formulario.appendChild(prioridad);
    formulario.appendChild(dificultad);
    formulario.appendChild(button);

    // Programación del formulario
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        if (nombre.value && descripcion.value && prioridad.value && dificultad.value) {
            let tarea = {
                nombre: nombre.value,
                descripcion: descripcion.value,
                prioridad: prioridad.value,
                dificultad: dificultad.value,
                completada: false
            };

            nombre.value = "";
            descripcion.value = "";
            prioridad.value = "";
            dificultad.value = "";

            console.log("Nueva tarea creada:", tarea);
            TareaList.push(tarea);
            
            // Guardar en LocalStorage
            saveTareasToStorage(TareaList);
            
            alert("Tarea creada exitosamente!");
        }
    });

    return formulario;
}

export { formularioTarea };