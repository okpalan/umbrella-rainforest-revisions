
var Keyboard = function () {
    this.keys = {};
    this.events = {};
    this.init();
}

Keyboard.prototype = {
    constructor: Keyboard,
    init() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.keyCode] = true;
        });
        window.addEventListener('keyup', (e) => {
            this.keys[e.keyCode] = false;
        });
    },
    on(event, callback) {
        this.events[event] = callback;
    },
    update() {
        for (var event in this.events) {
            this.events[event]();
        }
    },
    isDown(keyCode) {
        return this.keys[keyCode];
    }
}
export { Keyboard };