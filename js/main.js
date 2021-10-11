const languagesList = [
  "html",
  "css",
  "javascript",
  "node",
  //   "mongo",
  "nest",
  "angular",
  "vue",
  "react",
  "docker",
  "npm",
  "git",
  "babel",
  "socketio",
  "puppeteer",
  "typescript",
];

const mouse = {
  x: undefined,
  y: undefined,
};

const lastItemPosition = {
  x: undefined,
  y: undefined,
  size: undefined,
};

let animateId = undefined;
let isStopAnimate = false;

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;

  if (isStopAnimate)
    if (
      !(
        mouse.x - lastItemPosition.x < +lastItemPosition.size &&
        mouse.x - lastItemPosition.x > -lastItemPosition.size &&
        mouse.y - lastItemPosition.y < +lastItemPosition.size &&
        mouse.y - lastItemPosition.y > -lastItemPosition.size
      )
    ) {
      isStopAnimate = false;
      animate();
    }
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function init() {
  for (let i = 0; i < particleConfiguration.number; i++) {
    particlesArray.push(new Particle());
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw();
    particlesArray[i].update();
  }
  if (!isStopAnimate) animateId = window.requestAnimationFrame(animate);
}

function stopAnimate() {
  isStopAnimate = true;
  window.cancelAnimationFrame(animateId);
}
