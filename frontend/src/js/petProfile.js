const petCard = document.querySelector("template").content;
const petListContainer = document.querySelector("[pet-list]");
const loggedUser =
  localStorage["loggedUser"] && JSON.parse(localStorage["loggedUser"]);

(async function getPets() {
  const petData = await fetch(
    `http://127.0.0.1:8000/pets/all/${loggedUser.id}`
  );
  const petList = await petData.json();

  petList.forEach((pet) => {
    let aux = petCard.cloneNode(true);
    aux.querySelector("[nome-pet]").innerText = pet.nome;
    aux.querySelector("[tipo-pet]").innerText = pet.tipo;
    aux.querySelector("[raca-pet]").innerText = pet.raca;
    aux.querySelector("[tam-pet]").innerText = pet.tamanho;
    aux.querySelector("[pet-editar]").href += pet.id;
    const deleteButton = aux.querySelector("[pet-delete]");
    deleteButton.setAttribute("pet-delete", pet.id);
    deleteButton.addEventListener("click", async (e) => {
      const petId = e.target.getAttribute("pet-delete");
      await fetch(`http://127.0.0.1:8000/pets/${petId}`, {
        method: "DELETE",
      }).then( () => {
          window.location.reload()
            
      }
      );

    });

    petListContainer.appendChild(aux);
  });
})();
