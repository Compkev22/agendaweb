import { ItemTarea } from "../../common/itemTarea/itemTarea.js";
import { TareaList } from "./dbTarea.js";
import { saveTareasToStorage } from "../../common/localStorage/Storage.js";

function Tareas() {
    let sectionTareas = document.createElement("section");
    sectionTareas.id = "tareas";

    let h2 = document.createElement("h2");
    h2.innerHTML = "ToDoList";
    sectionTareas.appendChild(h2);


    const mostrarModal = (tarea) => {

        let overlay = document.createElement("div");
        overlay.className = "modal-overlay";

        let modalContent = document.createElement("div");
        modalContent.className = "modal-content";


        let btnCerrar = document.createElement("button");
        btnCerrar.className = "btn-cerrar";
        
        let iconoCerrar = document.createElement("img");
        iconoCerrar.src = "./assets/icons/x.svg";
        iconoCerrar.alt = "Cerrar";
        
        btnCerrar.appendChild(iconoCerrar);
        btnCerrar.addEventListener("click", () => {
            overlay.remove();
        });


        let titulo = document.createElement("h2");
        titulo.textContent = tarea.nombre;


        let infoContainer = document.createElement("div");
        infoContainer.className = "modal-info";


        let divDescripcion = document.createElement("div");
        divDescripcion.className = "info-item";
        divDescripcion.innerHTML = `
            <strong>Descripción</strong>
            <p>${tarea.descripcion}</p>
        `;

        let divPrioridad = document.createElement("div");
        divPrioridad.className = "info-item";
        let iconoPrioridadSrc = tarea.prioridad === 'Urgente' 
            ? './assets/icons/alert-circle.svg' 
            : './assets/icons/clock.svg';
        let badgePrioridad = `
            <span class="badge ${tarea.prioridad === 'Urgente' ? 'urgente' : 'con-tiempo'}">
                <img src="${iconoPrioridadSrc}" alt="${tarea.prioridad}">
                ${tarea.prioridad}
            </span>
        `;
        divPrioridad.innerHTML = `
            <strong>Prioridad</strong>
            <p>${badgePrioridad}</p>
        `;


        let divDificultad = document.createElement("div");
        divDificultad.className = "info-item";
        let badgeDificultad = `<span class="badge ${tarea.dificultad.toLowerCase()}">${tarea.dificultad}</span>`;
        divDificultad.innerHTML = `
            <strong>Dificultad</strong>
            <p>${badgeDificultad}</p>
        `;

        infoContainer.appendChild(divDescripcion);
        infoContainer.appendChild(divPrioridad);
        infoContainer.appendChild(divDificultad);

        modalContent.appendChild(btnCerrar);
        modalContent.appendChild(titulo);
        modalContent.appendChild(infoContainer);

        overlay.appendChild(modalContent);
        document.body.appendChild(overlay);


        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
    };

    // Renderizar tareas
    const renderTareas = () => {
        const tareasItems = sectionTareas.querySelectorAll('.item-tarea');
        tareasItems.forEach(item => item.remove());

        TareaList.forEach((tarea, index) => {
            sectionTareas.appendChild(
                ItemTarea(
                    tarea,
                    index,
                    (idx) => {
                        // Eliminar tarea
                        TareaList.splice(idx, 1);
                        saveTareasToStorage(TareaList);
                        renderTareas();
                    },
                    (idx) => {
                        // Toggle completada
                        TareaList[idx].completada = !TareaList[idx].completada;
                        saveTareasToStorage(TareaList);
                    },
                    (idx, nuevaPrioridad) => {
                        // Cambiar prioridad
                        TareaList[idx].prioridad = nuevaPrioridad;
                        saveTareasToStorage(TareaList);
                        console.log(`Tarea "${TareaList[idx].nombre}" cambió a: ${nuevaPrioridad}`);
                    },
                    (tarea) => {
                        // Ver más
                        mostrarModal(tarea);
                    }
                )
            );
        });
    };

    renderTareas();

    return sectionTareas;
}

export { Tareas };