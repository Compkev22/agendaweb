import { getTareasFromStorage, saveTareasToStorage } from "../../common/localStorage/Storage.js";

let TareaList = getTareasFromStorage();

if (TareaList.length === 0) {
    TareaList = [
        {nombre: "Completar proyecto final", descripcion: "Terminar la implementación del sistema de tareas con todas las funcionalidades requeridas", prioridad: "Urgente", dificultad: "Alta", completada: false},
        {nombre: "Revisar documentación", descripcion: "Leer y analizar la documentación del framework para mejorar el código", prioridad: "Con tiempo", dificultad: "Media", completada: false},
        {nombre: "Hacer ejercicio", descripcion: "Rutina de ejercicios matutina de 30 minutos", prioridad: "Con tiempo", dificultad: "Baja", completada: true}
    ];

    saveTareasToStorage(TareaList);
}

export { TareaList };