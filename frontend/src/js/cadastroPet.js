const petNameField = document.querySelector("[pet-name]");
const petBreedField = document.querySelector("[pet-breed]");
const petSizeField = document.querySelector("[pet-size]");
const petTypeField = document.querySelector("[pet-type]");

const loggedUser =
  localStorage["loggedUser"] &&
  JSON.parse(localStorage["loggedUser"]);

const form = document.querySelector("form");

form.addEventListener("submit",
  async (e) => {

    e.preventDefault();

    const pet = JSON.stringify({
      nome: petNameField.value,
      raca: petBreedField.value,
      tipo: petTypeField.value,
      tamanho: petSizeField.value
    });

    let cadastroPetRequest = await fetch(`http://127.0.0.1:8000/pets/cadastro/${loggedUser.id}`,
      {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: pet
      });

    cadastroPetRequest = await fetch(`http://127.0.0.1:8000/pets/all/${loggedUser.id}`);
    cadastroPetRequest = await cadastroPetRequest.json();

    localStorage["loggedUserPets"] = JSON.stringify(cadastroPetRequest);

    window.location.href = "./petProfile.html";

  });