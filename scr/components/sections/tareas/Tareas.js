import { ItemTarea } from "../../common/itemTarea/itemTarea.js";
import { TareaList } from "./dbTarea.js";
import { saveTareasToStorage } from "../../common/localStorage/Storage.js";

function Tareas() {
    let sectionTareas = document.createElement("section");
    sectionTareas.id = "tareas";

    let h2 = document.createElement("h2");
    h2.innerHTML = "ToDoList";
    sectionTareas.appendChild(h2);


    const mostrarModal = (tarea, index) => { 
        // Crear overlay
        let overlay = document.createElement("div");
        overlay.className = "modal-overlay";


        let modalContent = document.createElement("div");
        modalContent.className = "modal-content";


        const renderContenido = (esEdicion) => {
            modalContent.innerHTML = ""


            let btnCerrar = document.createElement("button");
            btnCerrar.className = "btn-cerrar";
            let iconoCerrar = document.createElement("img");
            iconoCerrar.src = "./assets/icons/x.svg";
            btnCerrar.appendChild(iconoCerrar);
            btnCerrar.addEventListener("click", () => overlay.remove());
            modalContent.appendChild(btnCerrar);

            if (!esEdicion) {

                let titulo = document.createElement("h2");
                titulo.textContent = tarea.nombre;

                let infoContainer = document.createElement("div");
                infoContainer.className = "modal-info";


                let divDescripcion = document.createElement("div");
                divDescripcion.className = "info-item";
                divDescripcion.innerHTML = `<strong>Descripción</strong><p>${tarea.descripcion}</p>`;


                let divPrioridad = document.createElement("div");
                divPrioridad.className = "info-item";
                let iconoSrc = tarea.prioridad === 'Urgente' ? './assets/icons/alert-circle.svg' : './assets/icons/clock.svg';
                divPrioridad.innerHTML = `
                    <strong>Prioridad</strong>
                    <p><span class="badge ${tarea.prioridad === 'Urgente' ? 'urgente' : 'con-tiempo'}">
                        <img src="${iconoSrc}"> ${tarea.prioridad}
                    </span></p>`;


                let divDificultad = document.createElement("div");
                divDificultad.className = "info-item";
                divDificultad.innerHTML = `
                    <strong>Dificultad</strong>
                    <p><span class="badge ${tarea.dificultad.toLowerCase()}">${tarea.dificultad}</span></p>`;

                let accionesDiv = document.createElement("div");
                accionesDiv.className = "modal-actions";
                
                let btnEditar = document.createElement("button");
                btnEditar.className = "btn-editar";
                btnEditar.innerHTML = `<img src="./assets/icons/edit.svg" alt="Editar"> Editar Tarea`;
                btnEditar.addEventListener("click", () => renderContenido(true)); 

                accionesDiv.appendChild(btnEditar);
                
                infoContainer.appendChild(divDescripcion);
                infoContainer.appendChild(divPrioridad);
                infoContainer.appendChild(divDificultad);
                
                modalContent.appendChild(titulo);
                modalContent.appendChild(infoContainer);
                modalContent.appendChild(accionesDiv);

            } else {

                let tituloEdit = document.createElement("h2");
                tituloEdit.textContent = "Editar Tarea";
                

                let labelNombre = document.createElement("strong");
                labelNombre.textContent = "Nombre de la tarea";
                let inputNombre = document.createElement("input");
                inputNombre.type = "text";
                inputNombre.value = tarea.nombre;


                let labelDesc = document.createElement("strong");
                labelDesc.textContent = "Descripción";
                let inputDesc = document.createElement("textarea");
                inputDesc.value = tarea.descripcion;


                let labelDif = document.createElement("strong");
                labelDif.textContent = "Dificultad";
                let selectDif = document.createElement("select");
                selectDif.innerHTML = `
                    <option value="Alta" ${tarea.dificultad === 'Alta' ? 'selected' : ''}>Alta</option>
                    <option value="Media" ${tarea.dificultad === 'Media' ? 'selected' : ''}>Media</option>
                    <option value="Baja" ${tarea.dificultad === 'Baja' ? 'selected' : ''}>Baja</option>
                `;


                let accionesDiv = document.createElement("div");
                accionesDiv.className = "modal-actions";

                let btnCancelar = document.createElement("button");
                btnCancelar.className = "btn-cancelar";
                btnCancelar.textContent = "Cancelar";
                btnCancelar.addEventListener("click", () => renderContenido(false)); 

                let btnGuardar = document.createElement("button");
                btnGuardar.className = "btn-guardar";
                btnGuardar.textContent = "Guardar Cambios";
                

                btnGuardar.addEventListener("click", () => {

                    tarea.nombre = inputNombre.value;
                    tarea.descripcion = inputDesc.value;
                    tarea.dificultad = selectDif.value;


                    TareaList[index] = tarea; 
                    saveTareasToStorage(TareaList);

                    renderTareas();


                    renderContenido(false);
                });

                accionesDiv.appendChild(btnCancelar);
                accionesDiv.appendChild(btnGuardar);

                modalContent.appendChild(tituloEdit);
                modalContent.appendChild(labelNombre);
                modalContent.appendChild(inputNombre);
                modalContent.appendChild(document.createElement("br")); // Espaciado simple
                modalContent.appendChild(labelDesc);
                modalContent.appendChild(inputDesc);
                modalContent.appendChild(document.createElement("br"));
                modalContent.appendChild(labelDif);
                modalContent.appendChild(selectDif);
                modalContent.appendChild(accionesDiv);
            }
        };

        // Renderizar inicial (Modo Vista)
        renderContenido(false);

        overlay.appendChild(modalContent);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) overlay.remove();
        });
    };


    const renderTareas = () => {
        const tareasItems = sectionTareas.querySelectorAll('.item-tarea');
        tareasItems.forEach(item => item.remove());

        TareaList.forEach((tarea, index) => {
            sectionTareas.appendChild(
                ItemTarea(
                    tarea,
                    index,
                    (idx) => { // Delete
                        if(confirm("¿Eliminar tarea?")) {
                            TareaList.splice(idx, 1);
                            saveTareasToStorage(TareaList);
                            renderTareas();
                        }
                    },
                    (idx) => { // Toggle
                        TareaList[idx].completada = !TareaList[idx].completada;
                        saveTareasToStorage(TareaList);
                    },
                    (idx, nuevaPrioridad) => { // Priority Change
                        TareaList[idx].prioridad = nuevaPrioridad;
                        saveTareasToStorage(TareaList);
                    },
                    (t) => { // Ver Más
                        // AQUI pasamos 't' (tarea) y 'index' para saber cuál editar
                        mostrarModal(t, index);
                    }
                )
            );
        });
    };

    renderTareas();

    return sectionTareas;
}

export { Tareas };