const progressBar = document.getElementById("progress-bar");
const button = document.getElementById("increase-progress");

let progress = 0;

button.addEventListener("click", () => {
    if (progress < 100) {
        progress += 10;
        progressBar.style.width = progress + "%";
    }
});
