import { Vec3 } from "../modules/vector";
import {IRay} from "../@types/classes/ray"

export class Ray implements IRay {
    position: Vec3;
    direction: Vec3;
    constructor(position: Vec3, direction: Vec3) {
        this.position = position;
        this.direction = direction;
    }
    
}