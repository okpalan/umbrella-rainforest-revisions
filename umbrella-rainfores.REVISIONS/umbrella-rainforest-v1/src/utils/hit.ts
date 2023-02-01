import { Vec3 } from "../modules/vector";
import { Ray } from "../modules/ray";

export class HitDetector {
    constructor(public ray: Ray, public target: Vec3) {
        this.ray = ray;
        this.target = target;
    }
    get hit(): boolean {
        let d = this.ray.direction
        let o = this.ray.position;
        let t = this.target;
        let a = d.x * d.x + d.y * d.y + d.z * d.z;
        let b = 2 * (d.x * (o.x - t.x) + d.y * (o.y - t.y) + d.z * (o.z - t.z));
        let c = (o.x - t.x) * (o.x - t.x) + (o.y - t.y) * (o.y - t.y) + (o.z - t.z) * (o.z - t.z) - 1;
        let discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
            discriminant = Math.sqrt(discriminant);
            let t1 = (-b - discriminant) / (2 * a);
            let t2 = (-b + discriminant) / (2 * a);
            if (t1 > 0 || t2 > 0) {
                return true // hit

            }
        }
        return false;
    }
}

