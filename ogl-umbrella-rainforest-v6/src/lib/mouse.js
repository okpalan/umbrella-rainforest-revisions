var Mouse = function (canvas) {
    this.canvas = canvas;
    this.position = new Vec3();
    this.events = {};
    this.init();
}

Object.defineProperty(Mouse, 'position', {
    get: function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    },
    enumerable: true,
    configurable: false
});


Mouse.prototype = {
    constructor: Mouse,
    init() {
        this.canvas.addEventListener('mousemove', (evt) => {
            this.position = Mouse.position(this.canvas, evt);
            this.update();
        });
    },
    on(event, callback) {
        this.events[event] = callback;
    },
    update() {
        for (var event in this.events) {
            this.events[event]();
        }
    }
}
export { Mouse }