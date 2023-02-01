import type { IVec2, IVec3 } from "../@types/classes/vector.d.ts";

export class Vec2 implements IVec2 {
    constructor();
    constructor(public x: number = 0, public y: number = 0) {
        this.x = x
        this.y = y;
    }
    add<T extends IVec2>(v: T): T {
        this.x += v.x;
        this.y += v.y;
        return v;
    }
    sub<T extends IVec2>(v: T): T {
        this.x -= v.x;
        this.y -= v.y;
        return v;
    }
    cross(v: IVec2): IVec2 {
        this.x *= v.y;
        this.y *= v.x;
        return this;
    }
    mul<T extends IVec2>(v: T): T {
        this.x *= v.x;
        this.y *= v.y;
        return v;
    }
    div<T extends IVec2>(v: T): T {
        this.x /= v.x;
        this.y /= v.y;
        return v

    }
    mag(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    normalize(): IVec2 {
        let m = this.mag();
        if (m != 0 && m != 1) {
            this.div({ x: m, y: m });
        }
        return this;
    }
    limit(max: number): IVec2 {
        if (this.mag() > max) {
            this.normalize();
            this.mul({ x: max, y: max });
        }
        return this;
    }

    rotX(theta: number): IVec2 {
        let temp = this.y;
        this.y = this.y * Math.cos(theta) - this.x * Math.sin(theta);
        this.x = temp * Math.sin(theta) + this.x * Math.cos(theta);
        return this;
    }
    rotY(theta: number): IVec2 {
        let temp = this.x;
        this.x = this.x * Math.cos(theta) - this.y * Math.sin(theta);
        this.y = temp * Math.sin(theta) + this.y * Math.cos(theta);
        return this;
    }
}


function isObject<T>(obj: T): boolean {
    return obj === Object(obj);
}

export class Vec3 implements IVec3 {
    x: number;
    y: number;
    z: number;
    constructor(public x: number = 0, public y: number = 0, public z: number = 0) {
        this.x = x
        this.y = y;
        this.z = z;
    }
    add<T extends IVec3>(v: T): T {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return v;
    }
    cross(v: IVec3): IVec3 {
        this.x = this.y * v.z - this.z * v.y;
        this.y = this.z * v.x - this.x * v.z;
        this.z = this.x * v.y - this.y * v.x;
        return this;
    }
    sub<T extends IVec3>(v: T): T {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return v;
    }
    mul<T extends IVec3>(v: T): T {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
        return v;
    }
    div<T extends IVec3>(v: T): T {
        if (isObject(v)) {
            this.x /= v.x;
            this.y /= v.y;
            this.z /= v.z;
        }
        else {
            this.x /= v;
            this.y /= v;
            this.z /= v;
        }
        return this

    }
    mag(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    normalize(): IVec3 {
        let m = this.mag();
        if (m != 0 && m != 1) {
            this.div({ x: m, y: m, z: m });
        }
        return this;
    }
    limit(max: number): IVec3 {
        if (this.mag() > max) {
            this.normalize();
            this.mul({ x: max, y: max, z: max });
        }
        return this;
    }
    rotX(theta: number): IVec3 {
       this.y = this.y * Math.cos(theta) - this.z * Math.sin(theta);
         this.z = this.y * Math.sin(theta) + this.z * Math.cos(theta);  
        return this;
    }
    rotY(theta: number): IVec3 {
        this.x = this.x * Math.cos(theta) - this.z * Math.sin(theta);
        this.z = this.x * Math.sin(theta) + this.z * Math.cos(theta);

        return this;
    }
    dot(v: any) {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
        return this;
    }
    rotZ(theta: number): IVec3 {
        this.x = this.x * Math.cos(theta) - this.y * Math.sin(theta);
        this.y = this.x * Math.sin(theta) + this.y * Math.cos(theta);
        return this;
    }
    proj(v) {
        let dot = this.dot(v);
        let projection = dot.div(v.mag());
        projection.dot(v);
        return projection;
    }

}
