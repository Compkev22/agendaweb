import { ItemContacto } from "../../common/itemContacto/itemContacto.js";
import { ContactList } from "./db.js";
import { saveContactsToStorage } from "../../common/localStorage/Storage.js";

function Contactos() {
    let sectionContactos = document.createElement("section");
    sectionContactos.id = "contactos";

    let h2 = document.createElement("h2");
    h2.innerHTML = "Contactos";
    sectionContactos.appendChild(h2);


    const mostrarModalContacto = (contacto) => {

        let overlay = document.createElement("div");
        overlay.className = "modal-overlay";

 
        let modalContent = document.createElement("div");
        modalContent.className = "modal-content modal-contacto";

     
        let btnCerrar = document.createElement("button");
        btnCerrar.className = "btn-cerrar";
        
        let iconoCerrar = document.createElement("img");
        iconoCerrar.src = "./assets/icons/x.svg";
        iconoCerrar.alt = "Cerrar";
        
        btnCerrar.appendChild(iconoCerrar);
        btnCerrar.addEventListener("click", () => {
            overlay.remove();
        });


        let contactoInfo = document.createElement("div");
        contactoInfo.className = "contacto-modal-info";

        let imgContainer = document.createElement("div");
        imgContainer.className = "contacto-img-container";
        
        let imgUsuario = document.createElement("img");
        imgUsuario.src = "./assets/icons/user2.svg";
        imgUsuario.alt = "Usuario";
        imgUsuario.className = "contacto-img-grande";
        
        imgContainer.appendChild(imgUsuario);

        let detallesContainer = document.createElement("div");
        detallesContainer.className = "contacto-detalles";


        let campos = [
            { label: "Alias", value: contacto.nombre },
            { label: "Número de Telefono", value: contacto.telefono },
            { label: "Nombre completo", value: contacto.nombreCompleto || "No registrado" },
            { label: "Ubicación", value: contacto.ubicacion || "No especificada" },
            { label: "Tipo / Grupo", value: contacto.tipo || "General" }
        ];

        campos.forEach(campo => {
            let campoDiv = document.createElement("div");
            campoDiv.className = "contacto-campo";
            
            let label = document.createElement("span");
            label.className = "contacto-label";
            label.textContent = campo.label;
            
            let valor = document.createElement("span");
            valor.className = "contacto-valor";
            valor.textContent = campo.value;
            
            campoDiv.appendChild(label);
            campoDiv.appendChild(valor);
            detallesContainer.appendChild(campoDiv);
        });

        contactoInfo.appendChild(imgContainer);
        contactoInfo.appendChild(detallesContainer);

        modalContent.appendChild(btnCerrar);
        modalContent.appendChild(contactoInfo);

        overlay.appendChild(modalContent);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
    };

 
    const renderContactos = () => {

        const contactosItems = sectionContactos.querySelectorAll('.item-contacto-wrapper');
        contactosItems.forEach(item => item.remove());

        ContactList.forEach((contact, index) => {

            let wrapper = document.createElement("div");
            wrapper.className = "item-contacto-wrapper";

            let itemDiv = ItemContacto("user2", contact.nombre, contact.telefono);
            

            itemDiv.style.cursor = "pointer";
            itemDiv.addEventListener("click", () => {
                mostrarModalContacto(contact);
            });
            

            let btnEliminar = document.createElement("button");
            btnEliminar.className = "btn-eliminar-contacto";
            
            let iconoEliminar = document.createElement("img");
            iconoEliminar.src = "./assets/icons/trash.svg";
            iconoEliminar.alt = "Eliminar";
            
            btnEliminar.appendChild(iconoEliminar);
            btnEliminar.addEventListener("click", (e) => {
                e.stopPropagation(); 
                if (confirm(`¿Eliminar contacto "${contact.nombre}"?`)) {
                    ContactList.splice(index, 1);
                    saveContactsToStorage(ContactList);
                    renderContactos();
                }
            });
            
            itemDiv.appendChild(btnEliminar);
            wrapper.appendChild(itemDiv);
            sectionContactos.appendChild(wrapper);
        });
    };

    renderContactos();
    
    return sectionContactos;
}

export { Contactos };