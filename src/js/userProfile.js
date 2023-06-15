// Login and Navbar behaviour

const user_name_field = document.querySelector("[user-name]");
const user_email_field = document.querySelector("[user-email]");
const user_pets_field = document.querySelector("[user-pets]");
const user_adress_field = document.querySelector("[user-adress]");
const user_age_field = document.querySelector("[user-age]");

user_name_field.innerText = user.user;
user_email_field.innerText = user.email;
user_pets_field.innerText = user.pets || 3;
user_adress_field.innerText = user.adress || "Rua da Xuxa, 123";
user_age_field.innerText = user.age || 23;












