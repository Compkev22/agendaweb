import { getContactsFromStorage, saveContactsToStorage } from "../../common/localStorage/Storage.js";

let ContactList = getContactsFromStorage();

if (ContactList.length === 0) {
    ContactList = [
        {nombre: "Juan",  telefono: "123456789"},
        {nombre: "María", telefono: "987654321"},
        {nombre: "Luis", telefono: "456123789"}
    ];

    saveContactsToStorage(ContactList);
}

export { ContactList };