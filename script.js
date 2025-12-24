// 🎄 Date cible : Noël 2025
const targetDate = new Date("2025-12-25T00:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "<h2>C'est Noël ! 🎄</h2>";
        startFireworks();
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();


// ---------------------------
// 🎆 FEU D’ARTIFICE 2D
// ---------------------------

function startFireworks() {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    function createFirework() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.5;

        for (let i = 0; i < 50; i++) {
            particles.push({
                x,
                y,
                angle: Math.random() * Math.PI * 2,
                speed: Math.random() * 3 + 1,
                radius: Math.random() * 2 + 1,
                alpha: 1,
                decay: Math.random() * 0.02 + 0.01,
                color: `hsl(${Math.random() * 360}, 100%, 60%)`
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {
            p.x += Math.cos(p.angle) * p.speed;
            p.y += Math.sin(p.angle) * p.speed;
            p.alpha -= p.decay;

            if (p.alpha <= 0) particles.splice(i, 1);

            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        });

        if (Math.random() < 0.05) createFirework();

        requestAnimationFrame(animate);
    }

    animate();
}
