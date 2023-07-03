// Login and Navbar behaviour

const user_name_field = document.querySelector("[user-name]");
const user_email_field = document.querySelector("[user-email]");
const user_pets_field = document.querySelector("[user-pets]");
const user_adress_field = document.querySelector("[user-adress]");
const user_tel_field = document.querySelector("[user-telefone]");
const user_profile_picure = document.querySelector("[profile-picture]");

user_name_field.innerText = user.nome;
user_email_field.innerText = user.email;
user_pets_field.innerText = user.pets || 3;
user_adress_field.innerText = user.endereco;
user_tel_field.innerText = user.telefone;
user_profile_picture.src = `${{}}`;











