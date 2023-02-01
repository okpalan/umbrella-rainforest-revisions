export { }

export declare interface IVec2 {
    x: number;
    y: number;
    add<T extends IVec2>(v: T): T;
    sub<T extends IVec2>(v: T): T;
    mul<T extends IVec2>(v: T): T;
    div<T extends IVec2>(v: T): T;
    mag(): number;
    cross(v: IVec2): IVec2;
    normalize(): IVec2;
    limit(max: number): IVec2;
    rotX(theta: number): IVec2;
    rotY(theta: number): IVec2;


}
export declare interface IVec2Constructor {
    new(x: number, y: number): IVec2;
    new(): IVec2;
    prototype: IVec2;
}

export class Vec2 implements IVec2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
    cross(v: IVec2): IVec2;
    add<T extends IVec2>(v: T): T;
    sub<T extends IVec2>(v: T): T;
    mul<T extends IVec2>(v: T): T;
    div<T extends IVec2>(v: T): T;
    mag(): number;
    normalize(): IVec2;
    limit(max: number): IVec2;
    rotX(theta: number): IVec2;
    rotY(theta: number): IVec2;
    constructor();
    constructor(x?: number, y?: number);
}

export declare interface IVec3 {
    x: number;
    y: number;
    z: number;
    add<T extends IVec3>(v: T): T;
    sub<T extends IVec3>(v: T): T;
    mul<T extends IVec3>(v: T): T;
    div<T extends IVec3>(v: T): T;
    cross(v: IVec3): IVec3;
    mag(): number;
    normalize(): IVec3;
    limit(max: number): IVec3;
    rotX(theta: number): IVec3;
    rotY(theta: number): IVec3;
    rotZ(theta: number): IVec3;
}

export declare interface IVec3Constructor {
    new(x: number, y: number, z: number): IVec3;
    new(): IVec3;
    prototype: IVec3;
}

export class Vec3 implements IVec3 {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number){
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }
    add<T extends IVec3>(v: T): T;
    sub<T extends IVec3>(v: T): T;
    mul<T extends IVec3>(v: T): T;
    div<T extends IVec3>(v: T): T;
    cross(v: IVec3): IVec3;
    mag(): number;
    normalize(): IVec3;
    limit(max: number): IVec3;
    rotX(theta: number): IVec3;
    rotY(theta: number): IVec3;
    rotZ(theta: number): IVec3;
}
