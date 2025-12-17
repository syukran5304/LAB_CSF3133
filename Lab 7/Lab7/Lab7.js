// Slideshow
let slides = document.querySelectorAll(".slide");
let index = 0;
setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 3000);
// Login 
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please enter username and password");
        return;
    }
    document.getElementById("profileName").textContent = username;
    alert("Login successful!");
});
// Progress Bar
let progress = 0;
document.getElementById("increaseProgress").addEventListener("click", function() {
    if (progress < 100) {
        progress += 10;
        document.getElementById("progressBar").style.width = progress + "%";
    }
});
// Collapsible
document.querySelector(".collapsible").addEventListener("click", function() {
    const content = document.querySelector(".collapsible-content");
    content.style.display = content.style.display === "block" ? "none" : "block";
});
