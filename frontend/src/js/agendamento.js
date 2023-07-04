const petSelection = document.querySelector("[pet-select]");
const loggedUserPets = 
    localStorage["loggedUserPets"] &&
    JSON.parse(localStorage["loggedUserPets"]);

loggedUserPets.forEach(pet => {

    let aux = document.createElement("option");
    aux.setAttribute("value", pet.id);
    aux.innerText = pet.nome;
    
    petSelection.appendChild(aux);
});


