const output = document.getElementById("output");

function cmd(type) {
  if (type === "label") output.textContent = "> LABEL: w budowie 🔥";
  if (type === "unreleased") output.textContent = "> UNRELEASED: coś się gotuje 👀";
  if (type === "nuty") output.textContent = "> NUTY: audio sync OK 🎧";
  if (type === "collab") output.textContent = "> WSPÓŁPRACA: pisz DM 💀";
}

/* 🔥 OGIEŃ */
const canvas = document.getElementById("fire");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    s: Math.random() * 3 + 1
  });
}

function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let p of particles) {
    ctx.fillStyle = `rgb(255, ${Math.random()*120}, 0)`;
    ctx.fillRect(p.x, p.y, 2, 6);

    p.y -= p.s;

    if (p.y < 0) {
      p.y = canvas.height;
      p.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(animate);
}

animate();
