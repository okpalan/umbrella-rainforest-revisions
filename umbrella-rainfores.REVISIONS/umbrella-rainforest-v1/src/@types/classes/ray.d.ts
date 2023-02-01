import { IVec3 } from "./vector.d";

export { }

export declare interface IRay {
    position: IVec3;
    direction: IVec3;
}
export declare interface IRayConstructor {
    new (position: IVec3, direction: IVec3): IRay;
    new (): IRay;
    prototype: IRay;
}

export class Ray implements IRay {
    position: IVec3;
    direction: IVec3;
    constructor(position: IVec3, direction: IVec3);
    constructor();
    constructor(position?: IVec3, direction?: IVec3);
}
