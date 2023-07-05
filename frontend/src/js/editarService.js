const serviceSelection = document.querySelector("[service-selection]");
const serviceNameField = document.querySelector("#service-name");
const serviceDescField = document.querySelector("#service-description");
const servicePriceField = document.querySelector("#service-price");

let servicesList;

(async function getServices() {

  servicesList = await fetch("http://127.0.0.1:8000/servicos/");
  servicesList = await servicesList.json();

  servicesList.forEach(service => {
    let aux = document.createElement("option");
    aux.setAttribute("value", service.id);
    aux.innerText = service.nome;

    serviceSelection.appendChild(aux);
  });

  updateFields();

})()

const updateFields = (e) => {

  e = typeof (e) === "undefined" ? 0 : e.target.value - 1;

  serviceNameField.value = servicesList[e].nome;

  serviceDescField.value = servicesList[e].descricao;

  servicePriceField.value = servicesList[e].valor;


}

serviceSelection.addEventListener("change", updateFields);


document.querySelector("form")
  .addEventListener("submit",
    async (e) => {

      e.preventDefault();

      const serviceUpdate = JSON.stringify({
        nome: serviceNameField.value,
        valor: servicePriceField.value,
        descricao: serviceDescField.value
      })

      const serviceUpdateRequest = await fetch(`http://127.0.0.1:8000/servicos/${serviceSelection.value}`,
        {
          method: 'PATCH',
          headers: { "Content-Type": "application/json" },
          body: serviceUpdate
        });

      window.location.href = "./index.html#servicos";
    });