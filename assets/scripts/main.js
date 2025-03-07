document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-container");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    images.forEach(image => observer.observe(image));

    function createRose() {
        const rose = document.createElement("div");
        rose.classList.add("rose");
        document.body.appendChild(rose);
        rose.style.left = `${Math.random() * window.innerWidth}px`;
        rose.style.animationDuration = `${Math.random() * 3 + 2}s`;
        setTimeout(() => rose.remove(), 5000);
    }

    setInterval(createRose, 500);
});
