const form = document.querySelector("form");
const email = document.querySelector("#email-input");
const password = document.querySelector("#password-input");
const validationMessage = document.querySelector("[validation-message]");

const validate = () => {
    if (form.checkValidity()) {
        const stored_User_Info =
            localStorage["pettop-userinfo"] &&
            JSON.parse(localStorage["pettop-userinfo"]);

        if (
            stored_User_Info.email == email.value &&
            stored_User_Info.password == password.value
        ) {
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
};
