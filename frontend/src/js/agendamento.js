import show from "./popup.js";

const petSelection = document.querySelector("[pet-select]");
const loggedUser =
    localStorage["loggedUser"] &&
    JSON.parse(localStorage["loggedUser"]);

let loggedUserPets;
(async function getUserPets(){
    loggedUserPets = await fetch(
        `https://pettopwebsite-production.up.railway.app/pets/all/${loggedUser.id}`
      );
    loggedUserPets = await loggedUserPets.json();

    loggedUserPets.forEach(pet => {
        let aux = document.createElement("option");
        aux.setAttribute("value", pet.id);
        aux.innerText = pet.nome;
    
        petSelection.appendChild(aux);
    });

})();


const serviceId = window.location.href.slice(window.location.href.lastIndexOf("?") + 1);
(async function getService() {

    let service = await fetch(`https://pettopwebsite-production.up.railway.app/servicos/${serviceId}`);
    service = await service.json();

    // document.querySelector("[service-card-img]").src = service.img;
    document.querySelector("[servico-title]").value = service.nome;
})();

const petSelected = document.querySelector("#pet-select");
const dataAgendamento = document.querySelector("#data");

document.querySelector("form")
    .addEventListener("submit",
        async (e) => {

            e.preventDefault();

            const agendamento = JSON.stringify({
                date: dataAgendamento.value,
                dono_id: loggedUser.id,
                pet_id: petSelected.value,
                service_id: serviceId
            });

            const agendamentoRequest = await fetch(
                "https://pettopwebsite-production.up.railway.app/agendamento",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: agendamento, 
                });
                    
            show();
        });

