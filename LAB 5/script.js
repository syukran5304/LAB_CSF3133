window.onload = function() {
    const images = [
        "welcome.jpg",
        "studentUMT.jpg",
        "graduateStudent.jpg"
    ];
    const img = document.getElementById("shuffleImage");
    const dots = document.querySelectorAll(".dot");
    let index = 0;

    function updateDots() {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    function changeImage(newIndex) {
        img.classList.add("fade-out");
        setTimeout(() => {
            index = newIndex;
            img.src = images[index];
            img.classList.remove("fade-out");
            updateDots();
        }, 800);
    }

    function autoShuffle() {
        let newIndex = (index + 1) % images.length;
        changeImage(newIndex);
    }

    document.getElementById("prevBttn").onclick = () => {
        let newIndex = (index - 1 + images.length) % images.length;
        changeImage(newIndex);
    };

    document.getElementById("nextBttn").onclick = () => {
        let newIndex = (index + 1) % images.length;
        changeImage(newIndex);
    };

    setInterval(autoShuffle, 4000);
};
