const canvas = document.getElementById('umbrella');
const ctx = canvas.getContext('2d');
const W = canvas.width = window.innerWidth;
const H = canvas.height = window.innerHeight;

var Vec3 = function (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z
}


Vec3.prototype.project = function (v) {
    var dot = this.x * v.x + this.y * v.y;
    var len = this.x * this.x + this.y * this.y;
    return new Vec3(this.x * dot / len, this.y * dot / len);
}

Vec3.prototype.reflect = function (v) {
    var proj = this.project(v);
    return new Vec3(2 * proj.x - v.x, 2 * proj.y - v.y);
}


var Camera = function (position) {
    this.position = position;
}

Camera.prototype.forward = function (scalar) {
    this.position.x += scalar;
}

Camera.prototype.backward = function (scalar) {
    this.position.x -= scalar;
}

Camera.prototype.left = function (scalar) {
    this.position.y -= scalar;
}

Camera.prototype.right = function (scalar) {
    this.position.y += scalar;
}

Camera.prototype.up = function (scalar) {
    this.position.z += scalar;
}

Camera.prototype.down = function (scalar) {
    this.position.z -= scalar;
}
var camera = new Camera(new Vec3(0, 0, 0));
console.log(camera.position);

var umbrella = {
    z: 100,
    position: new Vec3(W / 2, H / 2, 50),
    radius: 50,
    spacing: 2,
    color: 'red',
    draw() {
        var obj = {
            basePerimerter: 2 * Math.PI * this.radius,
            curvePerimeter: Math.PI * this.radius * this.radius,
        }
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 220;

        for (var i = 0; i < this.z; i++) {
            var angle = (i / this.z) * Math.PI * 2;
            var x = this.position.x + Math.cos(angle) * this.radius;
            var y = this.position.y + Math.sin(angle) * this.radius;
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + this.spacing);
        }
     



        ctx.stroke();
        ctx.closePath();
    },
    update: function () {
        this.draw();
    }

}


umbrella.update();

