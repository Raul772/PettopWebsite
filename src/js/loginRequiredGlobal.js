localStorage["logged"] === "false" ? () => {
    window.stop()
    window.location.href = "./login.html"
} : {};
