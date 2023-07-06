const userNameField = document.querySelector("[user-name]");
const userEmailField = document.querySelector("[user-email]");
const userAddressField = document.querySelector("[user-address]");
const userPhoneField = document.querySelector("[user-phone]");

const loggedUser =
  localStorage["loggedUser"] && JSON.parse(localStorage["loggedUser"]);

const form = document.querySelector("form");

(() => {
  userNameField.value = loggedUser.nome;
  userEmailField.value = loggedUser.email;
  userAddressField.value = loggedUser.endereco;
  userPhoneField.value = loggedUser.telefone;
})();

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const user = JSON.stringify({
    nome: userNameField.value,
    email: userEmailField.value,
    endereco: userAddressField.value,
    telefone: userPhoneField.value,
  });

  let userUpdateRequest = await fetch(
    `https://pettopwebsite-production.up.railway.app/users/${loggedUser.id}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: user,
    }
  );

  let userUpdate = await fetch(
    `https://pettopwebsite-production.up.railway.app/users/${loggedUser.id}`
  );
  userUpdate = await userUpdate.json();

  localStorage["loggedUser"] = JSON.stringify(userUpdate);
  window.location.href = "./userProfile.html";

});
