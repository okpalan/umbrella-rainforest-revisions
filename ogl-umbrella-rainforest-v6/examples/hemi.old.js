import { Vec2, Vec3 } from './lib/vector.js';

var canvas = document.getElementById("hemisphere");
var context = canvas.getContext("2d");
const coords = canvas.getBoundingClientRect();

if (!Math.cross) {
    Math.cross = function (a, b, theta = 0) {
        var sin = Math.sin(theta); // angle of rotation
        var obj = {
            x: (a.y * b.z) - (a.z * b.y),
            y: (a.z * b.x) - (a.x * b.z),
            z: (a.x * b.y) - (a.y * b.x)
        }
        return new Vec3(
            obj.x * sin,
            obj.y * sin,
            obj.z * sin
        );
    };

}

if (!Math.project) {
    Math.project = function (a, b) {
        var mag = b.mag();
        return a.dot(b)
            .div((mag * mag))
            .dot(b)
    }
}

if (!Math.reflect) {
    Math.reflect = function (a, b) {
        return a
            .project(b)
            .mul(2)
            .sub(b);
    }
}

const W = canvas.width = 800;
const H = canvas.height = 600;

var camera = {
    origin: new Vec3(W / 2, H / 2, 0),
    target: new Vec3(W / 2, H / 2, 5),
} 

var random = function (min, max) {  // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var rays = new Array(50).fill(0).map((_, i) => {
    var x = random(0, W);
    var y = random(0, H);
    var z = random(0, 50);
    return new Vec3(x, y, z);
});


var hemisphere = {
    rotation: 0,
    origin: new Vec3(W / 2, H / 2, 50),
    data: new Array(50).fill(0),
    segments: 15, // number of segments
    radius: 80,
    normals: [],
    positions: [],
    projections: [],
    [Symbol.iterator]: function () {
        "use strict";
        var index = 0;
        var data = this.data;
        return {
            next: function () {
                var {
                    origin: h0,
                    radius,
                    normals,
                    positions,
                    projections
                } = hemisphere;

                // angle of the point on the hemisphere
                var theta = (Math.PI * index) / data.length;

                var obj = {
                    x: Math.floor((Math.cos(theta) * radius) + h0.x),
                    y: Math.floor((-Math.sin(theta) * radius) + h0.y),
                    z: Math.floor((Math.sin(theta) * radius) + h0.z)
                };

                var position = new Vec3(obj.x, obj.y, obj.z);
                positions.push(position);

                var normal = Math.cross(position, h0, theta);
                normals.push(normal);

                var projected = Math.project(normal, h0);
                projections.push(projected);

                if (index < data.length) {
                    index++;
                    return {
                        // normals and x0, y0, z0
                        // are the values
                        // that will be returned by the iterator
                        value: [position, normal, projected],
                        done: false
                    }
                }
                return { done: true };
            }
        }
    },
    draw() {
        "use strict";
        // draw the projected points
        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = "white";
        var { origin } = this;

        context.moveTo(origin.x, origin.y);
        for (let [position, normal, projected] of this) {
            context.lineTo(projected.x, projected.y);
        }
        context.stroke();
        context.closePath();

    }
}



// update the rays
function render() {
    "use strict";
    context.clearRect(0, 0, W, H);

    context.fillStyle = "black";
    context.fillRect(0, 0, W, H);

    context.font = "20px Arial";
    context.fillText("Hemisphere", 10, 20);
    context.fillText("Press 'r' to reset", 10, 40);
    context.fillText("Press 's' to save", 10, 60);
    context.fillText("Press 'l' to load", 10, 80);
    
    // draw 

    hemisphere.draw();
    requestAnimationFrame(render);
}





render();