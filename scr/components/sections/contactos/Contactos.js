import { ItemContacto } from "../../common/itemContacto/itemContacto.js";
import { ContactList } from "./db.js";
function Contactos() {
    let sectionContactos = document.createElement("section");
    sectionContactos.id = "contactos";

    let h2 = document.createElement("h2");
    h2.innerHTML = "Contactos";
    sectionContactos.appendChild(h2);

    ContactList.forEach((contact)  => {
        sectionContactos.appendChild(ItemContacto("user2", 
        contact.nombre, contact.telefono));
    });
    
    return sectionContactos;
}
export { Contactos };
