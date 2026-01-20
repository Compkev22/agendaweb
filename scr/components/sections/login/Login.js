
let login = function () {
    let form = document.createElement("form");
    form.className = "login-form";

    let h3 = document.createElement("h3");
    h3.innerHTML = "Bienvenido"; 

    let user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario (Opcional)";
    user.id = "username";


    let password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Password (Opcional)";
    password.id = "password";


    let mensajeError = document.createElement("p");
    mensajeError.className = "mensaje-error";
    mensajeError.style.display = "none";

    let button = document.createElement("button");
    button.type = "submit";
    button.innerHTML = "Ingresar a la App"; 

    form.appendChild(h3);
    form.appendChild(user);
    form.appendChild(password);
    form.appendChild(mensajeError);
    form.appendChild(button);


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const usuarioNombre = user.value.trim() || "Admin";

        console.log("Ingresando directamente...");


        sessionStorage.setItem("usuarioLogueado", usuarioNombre);


        window.location.href = "scr/app.html";
    });

    return form;
}

export { login };