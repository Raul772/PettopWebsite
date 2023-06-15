const clickableDays = document.querySelectorAll(".clickable-day");
clickableDays.forEach((day) => {
    day.addEventListener("click", () => {
        clickableDays.forEach((d) => d.classList.remove("selected-day"));
        day.classList.add("selected-day");
    });
});
