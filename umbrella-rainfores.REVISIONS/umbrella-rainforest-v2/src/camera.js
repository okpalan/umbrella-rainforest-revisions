import { Vec3 } from "./vector.js";
const canvas = document.getElementById('canvas');
const W = canvas.getClientRects()[0].width;
const H = canvas.getClientRects()[0].height;

var camera = {
    position: new Vec3(0, 0, 0),
    direction: new Vec3(0, 0, W / H),
    moveUp(scalar) {
        this.position.y += scalar;
    },
    moveDown(scalar) {
        this.position.y -= scalar;
    },
    moveLeft(scalar) {
        this.position.x -= scalar;
    },
    moveRight(scalar) {
        this.position.x += scalar;
    },
    moveUp(scalar) {
        this.position.y += scalar;
    },
    moveDown(scalar) {
        this.position.y -= scalar;
    },

    lookLeft(scalar) {
        this.direction.x -= scalar;
    },
    lookRight(scalar) {
        this.direction.x += scalar;
    },

    lookUp(scalar) {
        this.direction.y -= scalar;
    }
    ,
    lookRight(scalar) {
        this.direction.y += scalar;
    },

}
export { camera }

window.addEventListener('keydown', function (e) {
    const { key } = e;
    switch (key) {
        case 'w':
            camera.moveUp(5);
            break;
        case 's':
            camera.moveDown(5);
            break;
        case 'a':
            camera.moveLeft(5);
            break;
        case 'd':
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
    }
})