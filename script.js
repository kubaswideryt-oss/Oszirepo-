const output = document.getElementById("output");

function cmd(type) {
  if (type === "label") {
    output.textContent = "> LABEL: under construction 🔥";
  }

  if (type === "unreleased") {
    output.textContent = "> UNRELEASED: leak detection system active 👀";
  }

  if (type === "nuty") {
    output.textContent = "> NUTY: audio core syncing... 🎧";
  }

  if (type === "collab") {
    output.textContent = "> WSPÓŁPRACA: DM lub giniesz 💀";
  }
}

/* 🔥 OGIEŃ ANIMACJA (canvas) */
const canvas = document.getElementById("fireCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: Math.random() * 3 + 1
  });
}

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let p of particles) {
    ctx.fillStyle = `rgb(${255}, ${Math.random()*100}, 0)`;
    ctx.fillRect(p.x, p.y, 2, 6);

    p.y -= p.speed;

    if (p.y < 0) {
      p.y = canvas.height;
      p.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(draw);
}

draw();
