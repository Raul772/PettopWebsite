const petIdentificationField = document.querySelector("[pet]");
const petNameField = document.querySelector("[pet-name]");
const petBreedField = document.querySelector("[pet-breed]");
const petSizeField = document.querySelector("[pet-size]");
const petTypeField = document.querySelector("[pet-type]");

const loggedUser =
  localStorage["loggedUser"] &&
  JSON.parse(localStorage["loggedUser"]);

const form = document.querySelector("form");

let petOriginal;
const petId = window.location.href.slice(window.location.href.lastIndexOf("?") + 1);

(async function getServices() {

  petOriginal = await fetch(`http://127.0.0.1:8000/pets/one/${petId}`);
  petOriginal = await petOriginal.json();

  updateFields();

})()

const updateFields = () => {

  petIdentificationField.value = petOriginal.nome
  petNameField.value = petOriginal.nome;
  petBreedField.value = petOriginal.raca;
  petSizeField.value = petOriginal.tamanho;
  petTypeField.value = petOriginal.tipo;
}

form.addEventListener("submit",
  async (e) => {

    e.preventDefault();

    const pet = JSON.stringify({
      nome: petNameField.value,
      raca: petBreedField.value,
      tipo: petTypeField.value,
      tamanho: petSizeField.value
    });


    let editPetRequest = await fetch(`http://127.0.0.1:8000/pets/${petId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: pet
      });

    editPetRequest = await fetch(`http://127.0.0.1:8000/pets/all/${loggedUser.id}`);
    editPetRequest = await editPetRequest.json();

    localStorage["loggedUserPets"] = JSON.stringify(editPetRequest);

    window.location.href = "./petProfile.html";

  }
);