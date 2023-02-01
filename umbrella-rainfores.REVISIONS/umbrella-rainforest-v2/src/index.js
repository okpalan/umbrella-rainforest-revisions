import { camera } from "./camera.js";
import { HemiSphere } from "./hemisphere.js";
import { Vec3 } from "./vector.js";
import { Ray } from "./ray.js";
import { intersects } from "./utils/intersects.js";

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const W = canvas.width = window.boundingClientRect.width;
const H = canvas.height = window.boundingClientRect.height;

var fps = 60;

var hemispheres = [];
var rays = [];

var rayCount = 0;
var rayMax = 100;

var intervals = {
    ray: function () {
        if (rayCount < rayMax) {
            rays.push(new Ray({ position: camera.position, direction: new Vec3(Math.random() * W, Math.random() * H, 0) }));
            rayCount++;
        }
        else {
            clearInterval(intervals.ray);
        }
    },
    sphere: function () {
        hemispheres.push(new HemiSphere({ position: new Vec3(Math.random() * W, Math.random() * H, 0), radius: 100 }));
    }
}

var rayInterval = setInterval(intervals.ray, 100);
var hemsphereInterval = setInterval(intervals.sphere, 1000);
// usie the camera to draw the rays
function draw() {
    context.clearRect(0, 0, W, H);

    requestAnimationFrame(draw);
    context.beginPath();
    context.lineWidth = 2;

    context.strokeStyle = "white";
    for (let ray of rays) {
        ray.draw(context).trace();
        for (let sphere of hemispheres) {
            if (intersects(ray, sphere)) {
                console.log("hit");
                ray.direction = ray.direction.reflect(sphere.position);
                ray.direction = new Vec3(Math.random() * W, Math.random() * H, 1000);
            }
        }
    }
    for (let sphere of hemispheres) {
        sphere.draw(context);
    }
    context.stroke();
    context.closePath();
}


draw();