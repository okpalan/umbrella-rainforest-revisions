import { Vec3 } from './vector.js';
import { Mouse } from './mouse.js';
import { Enum } from './utils/enum.js';


var Camera = function ({ position, target, speed = 10 }) {
    this.position = position || new Vec3();
    this.target = target || new Vec3(0, 0, 0);
    this.speed = speed;
}

// the camera controls is a bit different from the other controls
// because it is not a renderable object
// it is an enum of functions that can be called
// to move the camera
Camera.prototype = {
    constructor: Camera,
    keys: new Enum(['ArrowUp', 38], ['ArrowLeft', 37], ['ArrowRight', 39], ['ArrowDown', 39]),
    WASD: new Enum(['w', 87], ['a', 65], ['s', 83], ['d', 68]),
    on: function (event, callback) {
        // TODO: 
        // 1) add the ability to look up and down
        // look left if the mouse is moved to the left
        // look right if the mouse is moved to the right
        // look up if the mouse is moved up
        // look down if the mouse is moved down

        for (let key in this.keys) {
            if (this.keys[key] === (event.which || event.code)) {
                callback();
            }
        }
    },
    input: function (event) {
        var self = this;
        this.on(event, function () {
            self.move(event);
        });
    },
    move: function (event) {
        var { position, target, speed } = this;
        var { x, y, z } = position;
        var { x: tx, y: ty, z: tz } = target;
        switch (event.which || event.code) {
            case this.keys.ArrowUp:
                position.y += speed;
                break;
            case this.keys.ArrowLeft:
                position.x -= speed;
                break;
            case this.keys.ArrowRight:
                position.x += speed;
                break;
            case this.keys.ArrowDown:
                position.y -= speed;
                break;
        }
    },
    lookAt(target) {
        this.target = target;
    },
    
}
export { Camera };

