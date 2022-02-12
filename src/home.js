function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    home.appendChild(createParagraph("A delicious way to end your shopping spree!"));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;