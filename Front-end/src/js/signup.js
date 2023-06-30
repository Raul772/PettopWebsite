const form = document.querySelector("form");
const email = document.querySelector("#email-input");
const password = document.querySelector("#password-input");
const user = document.querySelector("#user-input");
const validationMessage = document.querySelector("[validation-message]");


form.addEventListener("submit", 
    async function validate (e) {

        e.preventDefault();

        if (form.checkValidity()) {

            let data = new FormData(e.target);

            const values = Object.fromEntries(data.entries());

            console.log('Request');
            

            await fetch("http://127.0.0.1:8000/users/cadastro", {
                method: "POST",
                body: JSON.stringify({ 
                    email: values.email,
                    password: values.password,
                    nome: values.nome,
                    cpf: values.cpf || "",
                    endereco: values.endereco || "",
                    telefone: values.telefone || ""
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(() => {
                window.location.href = "./login.html";
            })

        } else {
            validationMessage.innerText = "* Preencha corretamente os campos.";

            validationMessage.classList.remove("visually-hidden");

            user.style.border = "1px solid red";
            email.style.border = "1px solid red";
            password.style.border = "1px solid red";
        }
    }
);
