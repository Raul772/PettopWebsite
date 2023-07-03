const form = document.querySelector("form");
const email = document.querySelector("#email-input");
const password = document.querySelector("#password-input");
const validationMessage = document.querySelector("[validation-message]");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (form.checkValidity()) {
        const stored_User = await fetch(
            `http://127.0.0.1:8000/users/email/${email.value}`
        );
        const stored_User_Data = await stored_User.json();

        if (
            stored_User_Data.email == email.value &&
            stored_User_Data.hashed_password == password.value.concat("notreallyhashed")
        ) {
            localStorage["loggedUser"] = JSON.stringify(stored_User_Data);
            localStorage["logged"] = "true";
            window.location.href = "./index.html";
        } else {
            validationMessage.classList.remove("visually-hidden");

            validationMessage.innerText = "* Verifique Email e Senha.";
            email.style.border = "1px solid red";
            password.style.border = "1px solid red";
        }
    } else {
        validationMessage.innerText = "* Preencha corretamente os campos.";

        validationMessage.classList.remove("visually-hidden");

        email.style.border = "1px solid red";
        password.style.border = "1px solid red";
    }
});
