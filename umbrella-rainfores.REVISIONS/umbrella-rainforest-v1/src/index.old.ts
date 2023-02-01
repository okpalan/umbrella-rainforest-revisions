import { Vec3 } from "./modules/vector";
import { Ray } from "./modules/ray";
import { HitDetector } from "./utils/hit";
import { HemiSphere } from "./modules/hemisphere";
import { Material } from "./modules/material";

const camera = {
    position: new Vec3(0, 0, 0),
    direction: new Vec3(0, 0, 0),
    moveUp: function (amount: number) {
        this.position.y += amount;
    },
    moveDown: function (amount: number) {
        this.position.y -= amount;
    },
    moveForward: function (amount: number) {
        this.position.z += amount;
    },
    moveBackward: function (amount: number) {
        this.position.z -= amount;
    },
    moveLeft: function (amount: number) {
        this.position.x -= amount;
    },
    moveRight: function (amount: number) {
        this.position.x += amount;
    },
    lookUp: function (amount: number) {
        this.direction.y += amount;
    },
    lookDown: function (amount: number) {
        this.direction.y -= amount;
    },
    lookLeft: function (amount: number) {
        this.direction.x -= amount;
    },
    lookRight: function (amount: number) {
        this.direction.x += amount;
    }

}
window.addEventListener('keydown', (e) => {
    console.log(e.key);
  switch (e.key) {
    case 'w' || 'W':
        camera.moveForward(5);
        break;
    case 's' || 'S':
        camera.moveBackward(5);
        break;
    case 'a' ||'A':
        camera.moveLeft(5);
        break;
    case 'd' || 'D':
        camera.moveRight(5);
        break;
    case 'ArrowUp':
        camera.lookUp(5);
        break;
    case 'ArrowDown':
        camera.lookDown(5);
        break;
    case 'ArrowLeft':
        camera.lookLeft(5);
        break;
    case 'ArrowRight':
        camera.lookRight(5);
        break;
    default:
        break;

  }

})
// a function to generate random numbers
function random(min, max) {
    return Math.random() * (max - min) + min;
}

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d') as CanvasRenderingContext2D;
const W = canvas.width = window.innerWidth;
const H = canvas.height = window.innerHeight;


const imageData = context.createImageData(W, H) as ImageData;
const data = imageData.data;

const ray = new Ray(new Vec3(0, 0, 0), new Vec3(0, 0, 0));
const hit = new HitDetector(ray, new Vec3(0, 0, 0));
let nsphere = 25;
const spheres = [];
const materials = [];

for (var nmat = 0; nmat < nsphere; nmat++) {
    materials.push(new Material({
        specular: Math.random(),
        diffuse: Math.random(),
        ambient: Math.random(),
        shininess: Math.round(Math.random() * 200)
    }));
}


for (var n = 0; n < nsphere; n++) {
    spheres.push(new HemiSphere({
        position: new Vec3(random(-W / 2, W / 2), random(-H / 2, H / 2), random(10,200)),
        radius: random(10, 50),
        color: `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`,
        material: materials[Math.round(Math.random() * (nsphere - 1))]
    }));
}



function draw() {
    spheres.forEach((sphere, index) => {
        sphere.draw(context)
    });

}

function render() {
    requestAnimationFrame(render);
    draw();
}


render();