const TRAIL_LENGTH = 18;
const trail = [];
const positions = [];
let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

function rainbowColor(i, total) {
  let hue = Math.round(240 + 120 * (i / (total - 1)));
  return `hsl(${hue}, 75%, 55%)`;
}

for (let i = 0; i < TRAIL_LENGTH; i++) {
  let dot = document.createElement("div");
  dot.className = "trail";
  dot.style.background = rainbowColor(i, TRAIL_LENGTH);
  dot.style.opacity = 1 - i / TRAIL_LENGTH;
  dot.style.width = 14 - i * 0.5 + "px";
  dot.style.height = 14 - i * 0.5 + "px";
  dot.style.left = mouse.x + "px";
  dot.style.top = mouse.y + "px";
  document.body.appendChild(dot);
  trail.push(dot);
  positions.push({ x: mouse.x, y: mouse.y });
}

window.addEventListener("mousemove", (e) => {
  mouse.x = e.pageX;
  mouse.y = e.pageY;
});

function animateTrail() {
  let prev = mouse;
  const speed = 0.22;
  for (let i = 0; i < TRAIL_LENGTH; i++) {
    positions[i].x += (prev.x - positions[i].x) * speed;
    positions[i].y += (prev.y - positions[i].y) * speed;
    trail[i].style.left = positions[i].x - trail[i].offsetWidth / 2 + "px";
    trail[i].style.top = positions[i].y - trail[i].offsetHeight / 2 + "px";
    prev = positions[i];
  }
  requestAnimationFrame(animateTrail);
}
animateTrail();
