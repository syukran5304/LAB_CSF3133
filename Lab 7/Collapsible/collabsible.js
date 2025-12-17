document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".collapsible");
    const content = document.querySelector(".content");

    button.addEventListener("click", function () {
        content.classList.toggle("show");
    });
});
