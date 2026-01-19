import { ItemContacto } from "../../common/itemContacto/itemContacto.js";
import { ContactList } from "./db.js";
import { saveContactsToStorage } from "../../common/localStorage/Storage.js";

function Contactos() {
    let sectionContactos = document.createElement("section");
    sectionContactos.id = "contactos";

    let h2 = document.createElement("h2");
    h2.innerHTML = "Contactos";
    sectionContactos.appendChild(h2);

    const renderContactos = () => {
        const contactosItems = sectionContactos.querySelectorAll(".item-contacto");
        contactosItems.forEach(item => item.remove());

        ContactList.forEach((contact, index)  => {
            let itemDiv = ItemContacto("user2", contact.nombre, contact.telefono);

            let btnEliminar = document.createElement("button");
            btnEliminar.className = "btn-eliminar-contacto";
            btnEliminar.innerHTML = "";
            btnEliminar.addEventListener("click", () => {
                ContactList.splice(index, 1);
                saveContactsToStorage(ContactList);
                renderContactos();
            });
            itemDiv.appendChild(btnEliminar);
            sectionContactos.appendChild(itemDiv);
        });
    };

    renderContactos();
    return sectionContactos;

}
export { Contactos };
