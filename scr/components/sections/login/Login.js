import { USUARIOS } from "./dbUser.js";

let login = function () {
    let form = document.createElement("form");
    form.className = "login-form";

    let h3 = document.createElement("h3");
    h3.innerHTML = "Login";

    let user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario";
    user.required = true;
    user.id = "username";

    let password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Password";
    password.required = true;
    password.id = "password";

    let mensajeError = document.createElement("p");
    mensajeError.className = "mensaje-error";
    mensajeError.style.display = "none";

    let button = document.createElement("button");
    button.type = "submit";
    button.innerHTML = "Iniciar Sesión";

    form.appendChild(h3);
    form.appendChild(user);
    form.appendChild(password);
    form.appendChild(mensajeError);
    form.appendChild(button);

    // Programación del login
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const usuarioInput = user.value.trim();
        const passwordInput = password.value.trim();

        // Validar credenciales
        const usuarioValido = USUARIOS.find(
            u => u.usuario === usuarioInput && u.password === passwordInput
        );

        if (usuarioValido) {
            // Login exitoso
            console.log("Login exitoso");
            // Guardar sesión
            sessionStorage.setItem("usuarioLogueado", usuarioInput);
            // Redirigir a app.html
            window.location.href = "scr/app.html";
        } else {
            // Login fallido
            mensajeError.textContent = "❌ Usuario o contraseña incorrectos";
            mensajeError.style.display = "block";
            user.value = "";
            password.value = "";
            user.focus();
        }
    });

    return form;
}

export { login };