const petCard = document.querySelector("template").content;
const petListContainer = document.querySelector("[pet-list]");
const loggedUser =
  localStorage["loggedUser"] && JSON.parse(localStorage["loggedUser"]);

(async function getPets() {
  const petData = await fetch(
    `https://pettopwebsite-production.up.railway.app/pets/all/${loggedUser.id}`
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
      await fetch(`https://pettopwebsite-production.up.railway.app/pets/${petId}`, {
        method: "DELETE",
      }).then( () => {
          window.location.reload()
            
      }
      );

    });

    petListContainer.appendChild(aux);
  });
})();
