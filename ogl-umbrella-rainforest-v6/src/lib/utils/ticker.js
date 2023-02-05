
var Ticker = function Ticker(interval) {
    this.interval = interval;
    this.timer = null;
    this.listeners = [];
}
Ticker.prototype = {
    start: function () {
        this.timer = window.setInterval(this.tick.bind(this), this.interval);
    }
    , stop: function () {
        clearInterval(this.timer);
    }
    , tick: function () {
        this.listeners.forEach(function (listener) {
            listener();
        });
    }
    , addListener: function (listener) {
        this.listeners.push(listener);
    }
    , removeListener: function (listener) {
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
}

export { Ticker };
