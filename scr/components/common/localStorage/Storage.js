const LOCAL_STORAGE_KEY_CONTACTOS = 'agenda_telefonica';
const LOCAL_STORAGE_KEY_TAREAS = 'lista_tareas';

/**
 * 
 * @param {Array} contactos 
 */
function saveContactsToStorage(contactos) {
    localStorage.setItem(LOCAL_STORAGE_KEY_CONTACTOS, JSON.stringify(contactos));
}

/**
 * 
 * @returns {Array} 
 */
function getContactsFromStorage() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CONTACTOS)) || [];
}



/**
 * 
 * @param {Array} tareas 
 */
function saveTareasToStorage(tareas) {
    localStorage.setItem(LOCAL_STORAGE_KEY_TAREAS, JSON.stringify(tareas));
}

/**
 * 
 * @returns {Array} 
 */
function getTareasFromStorage() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TAREAS)) || [];
}


export { 
    LOCAL_STORAGE_KEY_CONTACTOS, 
    LOCAL_STORAGE_KEY_TAREAS,
    getContactsFromStorage, 
    saveContactsToStorage,
    getTareasFromStorage,
    saveTareasToStorage
};