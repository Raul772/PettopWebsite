const logged = localStorage["logged"] === "true";
const user_menu = document.querySelector("[user-dropdown]");
const login_button = document.querySelector("[login-button]");
const signup_button = document.querySelector("[signup-button]");
const user =
    localStorage["loggedUser"] &&
    JSON.parse(localStorage["loggedUser"]);

if (logged) {
    user_menu.classList.remove("visually-hidden");
    user_menu.querySelector("a").innerText = `${user.nome}`;
    login_button.classList.add("visually-hidden");
    signup_button.classList.add("visually-hidden");
}

const logout = () => {
    localStorage["logged"] = "false";
    localStorage["loggedUser"] = null;
    localStorage["loggedUserPets"] = null;
    window.location.reload();
};

function preventAccess() {
    const login_Required_Buttons = document.querySelectorAll("[require-login]");
    
    login_Required_Buttons.forEach((b) => {
        b.addEventListener("click", () => {
            window.location.href = logged ? b.getAttribute("href") : "./login.html";
        });
    });
}

// ------------------------------------------------------

const serviceCard = document.querySelector("template").content;
const servicesContainer = document.querySelector("#servicos");

(async function getServices(){
    let servicesData = await fetch(`https://pettopwebsite-production.up.railway.app/servicos`);
    servicesData = await servicesData.json();

    servicesData.forEach(service => {

        let aux = serviceCard.cloneNode(true);
        aux.querySelector("[service-card-title]").innerText = service.nome;
        aux.querySelector("[service-card-desc]").innerText = service.descricao;
        // aux.querySelector("[service-card-img]").innerText = service.img;
        aux.querySelector("[service-card-button]").setAttribute("href", `agendamento.html?${service.id}`);

        servicesContainer.appendChild(aux);
    });

    preventAccess();

})()


