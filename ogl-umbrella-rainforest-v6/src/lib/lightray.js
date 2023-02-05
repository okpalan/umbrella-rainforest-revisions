import {Material} from './Material.js';
import { Renderable } from './utils/index.js';


var LightRay = function ({ position, angle, color }) {
    Renderable.call(this);
    this.position = position;
    this.angle = angle;
    this.color = color;

}

LightRay.prototype.render = function (ctx) {
    
}




export { LightRay };
