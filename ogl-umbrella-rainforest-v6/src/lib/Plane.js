
function Plane(normal, constant) {
    this.normal = (normal !== undefined) ? normal : new Vector3(1, 0, 0);
    this.constant = (constant !== undefined) ? constant : 0;
}
Plane.prototype = {
    constructor: Plane,
    isPlane: true,
    set: function (normal, constant) {
        this.normal.copy(normal);
        this.constant = constant;
        return this;
    },
    setComponents: function (x, y, z, w) {
        this.normal.set(x, y, z);
        this.constant = w;
        return this;
    },
};

export { Plane };