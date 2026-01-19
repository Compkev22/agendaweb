let Button = (text, id, icon, onClick) => {
    let button = document.createElement("button");
    button.className = "button";
    button.id = id;

    let img = document.createElement("img");
    img.src = `./assets/icons/${icon}.svg`;
    img.alt = text;

    let span = document.createElement("span");
    span.textContent = text;

    button.appendChild(img);
    button.appendChild(span);

    if (onClick) {
        button.addEventListener("click", () => {
            // Pasar el botón actual a la función onClick
            onClick(button);
        });
    }

    return button;
}

export { Button };