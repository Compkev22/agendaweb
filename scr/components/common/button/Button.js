let Button = (title, id, img) => {
    let div = document.createElement("div");
    div.id = id;

    let divImage = document.createElement("div");
    divImage.className = 'button-image';

    let imgIcon = document.createElement("img");
    imgIcon.src = `./assets/icons/${img}.svg`;
    imgIcon.alt = title;
    divImage.appendChild(imgIcon);

    let p = document.createElement("div");
    p.className = 'button-text';
    p.textContent = title;

    div.appendChild(divImage);
    div.appendChild(p);

    return div;
}

export { Button };