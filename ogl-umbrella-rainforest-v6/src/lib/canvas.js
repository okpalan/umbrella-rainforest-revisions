import {Vec3 } from './vector.js';

var Canvas = function ( { container,width, height, background }) {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.width = this.canvas.width = width;
    this.height = this.canvas.height = height;
    this.container = container;
    this.container.appendChild(this.canvas);
    this.center = new Vec3(this.width / 2, this.height / 2, 0);
};

Canvas.prototype = {
    constructor: Canvas,
    clear() {
        this.context.clearRect(0, 0, this.width, this.height);
    },
    resize(width, height) {
        this.width = width;
        this.height = height;
        this.canvas.width = width;
        this.canvas.height = height;
        this.center = new Vec3(this.width / 2, this.height / 2, 0);
    },
    setId(id) {
        this.canvas.id = id;
    },
    get id() {
        return this.canvas.id;
    },
    /**
     * Usage: download('filename', 'image/png');
     * @param {*} filename 
     * @param {*} type 
     */
    download(filename, type) {
        var link = document.createElement('a');
        link.download = filename;
        link.href = this.canvas.toDataURL(type);
        link.click();
    }
}

export { Canvas };