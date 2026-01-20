let ItemTarea = (tarea, index, onDelete, onToggle, onPrioridadChange, onVerMas) => {
    let div = document.createElement("div");
    div.className = "item-tarea";


    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.completada;
    checkbox.addEventListener("change", () => onToggle(index));


    let etiquetaNombre = document.createElement("span");
    etiquetaNombre.textContent = tarea.nombre;
    etiquetaNombre.className = "nombre-tarea";


    let containerPrioridad = document.createElement("div");
    containerPrioridad.className = "prioridad-container";

    let iconoPrioridad = document.createElement("img");
    iconoPrioridad.className = "icono-prioridad-select";
    iconoPrioridad.src = tarea.prioridad === "Urgente" 
        ? "./assets/icons/alert-circle.svg" 
        : "./assets/icons/clock.svg";
    iconoPrioridad.alt = tarea.prioridad;


    let selectPrioridad = document.createElement("select");
    selectPrioridad.className = tarea.prioridad === "Urgente" ? "prioridad-select urgente" : "prioridad-select con-tiempo"; //El ? y los : son un if en una sola línea
    selectPrioridad.innerHTML = `
        <option value="Urgente" ${tarea.prioridad === "Urgente" ? "selected" : ""}>Urgente</option>
        <option value="Con tiempo" ${tarea.prioridad === "Con tiempo" ? "selected" : ""}>Con tiempo</option>
    `;
    selectPrioridad.addEventListener("change", (e) => {
        onPrioridadChange(index, e.target.value);

        selectPrioridad.className = e.target.value === "Urgente" ? "prioridad-select urgente" : "prioridad-select con-tiempo";
        iconoPrioridad.src = e.target.value === "Urgente" 
            ? "./assets/icons/alert-circle.svg" 
            : "./assets/icons/clock.svg";
    });

    containerPrioridad.appendChild(iconoPrioridad);
    containerPrioridad.appendChild(selectPrioridad);


    let btnVerMas = document.createElement("button");
    btnVerMas.className = "btn-ver-mas";
    
    let iconoVerMas = document.createElement("img");
    iconoVerMas.src = "./assets/icons/eye.svg";
    iconoVerMas.alt = "Ver más";
    
    let textoVerMas = document.createElement("span");
    textoVerMas.textContent = "Ver más";
    
    btnVerMas.appendChild(iconoVerMas);
    btnVerMas.appendChild(textoVerMas);
    btnVerMas.addEventListener("click", () => onVerMas(tarea));


    let btnEliminar = document.createElement("button");
    btnEliminar.className = "btn-eliminar";
    
    let iconoEliminar = document.createElement("img");
    iconoEliminar.src = "./assets/icons/trash.svg";
    iconoEliminar.alt = "Eliminar";
    
    btnEliminar.appendChild(iconoEliminar);
    btnEliminar.addEventListener("click", () => onDelete(index));

    div.appendChild(checkbox);
    div.appendChild(etiquetaNombre);
    div.appendChild(containerPrioridad);
    div.appendChild(btnVerMas);
    div.appendChild(btnEliminar);

    return div;
}

export { ItemTarea };