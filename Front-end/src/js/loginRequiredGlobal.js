const logged = localStorage["logged"] === "true";
const user_menu = document.querySelector("[user-dropdown]");
const login_button = document.querySelector("[login-button]");
const signup_button = document.querySelector("[signup-button]");
const user =
    localStorage["pettop-userinfo"] &&
    JSON.parse(localStorage["pettop-userinfo"]);

if (logged) {
    user_menu.classList.remove("visually-hidden");
    user_menu.querySelector("a").innerText = `${user.user}`;
    login_button.classList.add("visually-hidden");
    signup_button.classList.add("visually-hidden");
}else{
    window.location.href = "./login.html";
}

const logout = () => {
    localStorage["logged"] = "false";
    window.location.href = "./index.html";
};

const login_Required_Buttons = document.querySelectorAll("[require-login]");

login_Required_Buttons.forEach((b) => {
    b.addEventListener("click", () => {
        window.location.href = logged ? b.getAttribute("href") : "./login.html";
    });
});