const canvas = document.getElementsByClassName(
  "programming__languages--canvas"
)[0];
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particleConfiguration = {
  number: 6,
  minSize: 60,
  maxSize: 100,
  minSpeed: 2,
  maxSpeed: 5,
};

const particlesArray = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.propertyUpdate();
  }

  propertyUpdate() {
    this.size = getRndInteger(
      particleConfiguration.minSize,
      particleConfiguration.maxSize
    );
    this.speed = getRndInteger(
      particleConfiguration.minSpeed,
      particleConfiguration.maxSpeed
    );
    this.angle = Math.random() * 360;
    this.spin = Math.random() < 0.5 ? -1 : 1;
    this.image = new Image();
    this.image.src = `./images/languages/${
      languagesList[getRndInteger(0, languagesList.length - 1)]
    }.png`;
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(((this.angle * Math.PI) / 360) * this.spin);
    ctx.drawImage(
      this.image,
      0 - this.size / 2,
      0 - this.size / 2,
      this.size,
      this.size
    );
    ctx.restore();
  }

  update() {
    this.angle += 10;
    if (this.y > canvas.height) {
      this.y = 0 - this.size;
      this.x = Math.random() * canvas.width;
      this.propertyUpdate();
    }

    this.y += this.speed;

    if (
      mouse.x - this.x < +this.size &&
      mouse.x - this.x > -this.size &&
      mouse.y - this.y < +this.size &&
      mouse.y - this.y > -this.size
    ) {
      this.size++;
      if (this.speed > 1) this.speed--;
    } else {
      if (this.speed < 2) this.speed++;
    }
  }
}
