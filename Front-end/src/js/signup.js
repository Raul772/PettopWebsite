const form = document.querySelector("form");
const email = document.querySelector("#email-input");
const password = document.querySelector("#password-input");
const user = document.querySelector("#user-input");
const validationMessage = document.querySelector("[validation-message]");

const validate = () => {
    if (form.checkValidity()) {
        localStorage["pettop-userinfo"] = JSON.stringify({
            user: user.value,
            email: email.value,
            password: password.value,
        });

        window.location.href = "./login.html";
    } else {
        validationMessage.innerText = "* Preencha corretamente os campos.";

        validationMessage.classList.remove("visually-hidden");

        user.style.border = "1px solid red";
        email.style.border = "1px solid red";
        password.style.border = "1px solid red";
    }
};
