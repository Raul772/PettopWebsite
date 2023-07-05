const petSelection = document.querySelector("[pet-select]");
const loggedUserPets =
    localStorage["loggedUserPets"] &&
    JSON.parse(localStorage["loggedUserPets"]);

const loggedUser =
    localStorage["loggedUser"] &&
    JSON.parse(localStorage["loggedUser"]);

loggedUserPets.forEach(pet => {

    let aux = document.createElement("option");
    aux.setAttribute("value", pet.id);
    aux.innerText = pet.nome;

    petSelection.appendChild(aux);
});

const serviceId = window.location.href.slice(window.location.href.lastIndexOf("?") + 1);
(async function getService() {

    let service = await fetch(`http://127.0.0.1:8000/servicos/${serviceId}`);
    service = await service.json();

    // document.querySelector("[service-card-img]").src = service.img;
    document.querySelector("[servico-title]").value = service.nome;
})()



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
                "http://127.0.0.1:8000/agendamento",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: agendamento, 
                });
                    
            // window.location.href = "./userAgendamentos.html";
        });

