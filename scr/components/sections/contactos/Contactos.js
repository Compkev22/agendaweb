import { ItemContacto } from "../../common/itemContacto/itemContacto.js";

function Contactos() {
    let sectionContactos = document.createElement("section");
    sectionContactos.id = "contactos";

    let h2 = document.createElement("h2");
    h2.innerHTML = "Contactos";
    sectionContactos.appendChild(h2);

    sectionContactos.appendChild(ItemContacto("user2", "Josue Fuentes", "12345678"));
    sectionContactos.appendChild(ItemContacto("user2", "Josue Fuentes", "12345678"));
    sectionContactos.appendChild(ItemContacto("user2", "Josue Fuentes", "12345678"));
    sectionContactos.appendChild(ItemContacto("user2", "Josue Fuentes", "12345678"));
    return sectionContactos;
}
export { Contactos };
