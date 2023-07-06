const serviceNameField = document.querySelector("[service-title]");
const servicePriceField = document.querySelector("[service-price]");
const serviceDescField = document.querySelector("[service-desc]");

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const servico = JSON.stringify({
    nome: serviceNameField.value,
    valor: servicePriceField.value,
    descricao: serviceDescField.value,
  });

  const serviceCadastroRequest = await fetch(
    "https://pettopwebsite-production.up.railway.app/servicos/cadastro",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: servico
    }
  ).then(window.location.href = "./index.html#servicos");
});
