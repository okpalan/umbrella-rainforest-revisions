// An umbrella graphics library
// called ogl which stands for OGL
// Object Graphics Library
; (function (_global, factory) {
    'use strict'
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    if (typeof define == "function" && define.amd) {
        define(["exports"], factory)
    } else if (typeof exports !== "undefined") {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        factory(exports);
        //how to import this in the test file?
        

    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        _global.OGL = mod.exports

    }




})(typeof this !== "undefined" ? this : globalThis, function (exports, factory) {


    function isWindow(obj) {
        return obj != null && obj === obj.window;
    }

    const isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    const isObject = function (obj) {
        return obj === Object(obj);
    };

    var Vec3 = function (obj) {
        if (isObject(obj)) {
            this.x = obj.x || 0;
            this.y = obj.y || 0;
            this.z = obj.z || 0;
        } else {
            for (var { x, y, z } of arguments) {
                this.x = x || 0;
                this.y = y || 0;
                this.z = z || 0;
            }
        }
    };

    Vec3.prototype = {
        constructor: Vec3,
        add: function (v) {
            if (v instanceof Vec3) {
                this.x += v.x;
                this.y += v.y;
                this.z += v.z;
            } else if (isNumber(v)) {
                this.x += v;
                this.y += v;
                this.z += v;
            }
            return this;
        },
        sub: function (v) {
            if (v instanceof Vec3) {
                this.x -= v.x;
                this.y -= v.y;
                this.z -= v.z;
            } else if (isNumber(v)) {
                this.x -= v;
                this.y -= v;
                this.z -= v;
            }
            return this;
        },
        mul: function (v) {
            if (v instanceof Vec3) {
                this.x *= v.x;
                this.y *= v.y;
                this.z *= v.z;
            } else if (isNumber(v)) {
                this.x *= v;
                this.y *= v;
                this.z *= v;
            }
            return this;
        },
        div: function (v) {
            if (v instanceof Vec3) {
                this.x /= v.x;
                this.y /= v.y;
                this.z /= v.z;
            } else if (isNumber(v)) {
                this.x /= v;
                this.y /= v;
                this.z /= v;
            }
            return this;
        },
        /**
         * This is the dot product of two vectors. It is the sum of the products of the corresponding entries of the two sequences of numbers.
         * @param {*} v 
         * @returns vec3
         */
        dot: function (v) {
            this.x *= v.x;
            this.y *= v.y;
            this.z *= v.z;
            return this;
        },
        cross: function (v) {
            this.x = this.y * v.z - this.z * v.y;
            this.y = this.z * v.x - this.x * v.z;
            this.z = this.x * v.y - this.y * v.x;
            return this;
        },
        magnitude: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        },
        normalize: function () {
            var m = this.magnitude();
            this.x /= m;
            this.y /= m;
            this.z /= m;
            return this;
        },
        distance: function (v) {
            var dx = this.x - v.x;
            var dy = this.y - v.y;
            var dz = this.z - v.z;
            return Math.sqrt(dx * dx + dy * dy + dz * dz);
        },
        project: function (v) {
            var dot = this.dot(v);
            var mag = v.magnitude();
            return dot / (mag * mag);
        },
        reflect: function (v) {
            this.project(v);
            this.mul(2);
            this.sub(v);
            return this;
        },
        clone: function () {
            return new Vec3(this);
        }
    };


    exports['Vec3'] = Vec3;
    const getMousePos = (canvas, evt) => {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    var Canvas = function ({ canvas, width, height, container }) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.container = container;
        this.container.appendChild(this.canvas);
        this.center = new Vec3(this.width / 2, this.height / 2, 0);
    };

    exports['Canvas'] = Canvas;
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
    }

    var HemiSphere = function (position, radius, segments) {
        this.position = position
        this.radius = radius || 50;
        this.segments = segments || 16;
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.uvs = [];
        this.init();
    }
    HemiSphere.prototype = {
        constructor: HemiSphere,
        init: function () {
            var index = 0;
            var indexArray = [];
            var halfSegments = this.segments / 2;
            var segmentStep = Math.PI / halfSegments;
            var segmentStepHalf = segmentStep / 2;
            var radiusStep = this.radius / halfSegments;
            var radius = 0;
            var u = 0;
            var v = 0;
            var uStep = 1 / this.segments;
            var vStep = 1 / halfSegments;
            var i, j;
            for (i = 0; i <= halfSegments; i++) {
                var segment = segmentStep * i;
                for (j = 0; j <= this.segments; j++) {
                    var angle = segmentStep * j;
                    var vertex = new Vec3();
                    vertex.x = radius * Math.cos(angle) * Math.sin(segment);
                    vertex.y = radius * Math.cos(segment);
                    vertex.z = radius * Math.sin(angle) * Math.sin(segment);
                    this.vertices.push(vertex.x, vertex.y, vertex.z);
                    this.normals.push(vertex.x, vertex.y, vertex.z);
                    this.uvs.push(u, v);
                    u += uStep;
                    if (i > 0 && j > 0) {
                        var a = index + this.segments + 1;
                        var b = index + this.segments;
                        var c = index;
                        var d = index + 1;
                        indexArray.push(a, b, c);
                        indexArray.push(d, c, a);
                    }
                    index++;
                }
                u = 0;
                v += vStep;
                radius += radiusStep;
            }
            this.indices = new Uint16Array(indexArray);
        },
        draw: function (canvas, color) {
            var { context } = canvas;
            context.beginPath();
            context.fillStyle = color;
            context.moveTo(this.vertices[0], this.vertices[1]);
            for (var i = 3; i < this.vertices.length; i += 3) {
                context.lineTo(this.vertices[i], this.vertices[i + 1]);
            }
            context.closePath();
            context.fill();
        }
    };

    exports["HemiSphere"] = HemiSphere;

    function Enum(...args) {
        for (let i = 0; i < args.length; i++) {
            this[args[i]] = i;
        }
        Object.freeze(this);
        return this
    }
    exports["Enum"] = Enum;
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

    exports["Keyboard"] = Keyboard;
    var Mouse = function (canvas) {
        this.canvas = canvas;
        this.position = new Vec3();
        this.events = {};
        this.init();
    }


    Mouse.prototype = {
        constructor: Mouse,
        init() {
            this.canvas.addEventListener('mousemove', (e) => {
                var pos = getMousePos(this.canvas, e);
                this.position.x = pos.x;
                this.position.y = pos.y;
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

    exports["Mouse"] = Mouse;
    var Camera = function (position, target, speed = 10) {
        this.position = position || new Vec3();
        this.target = target || new Vec3();
        this.speed = speed;
    }

    Camera.statics = {
        controls: new Enum(["UP", 37], ["DOWN", 39], ["LEFT", 38], ["RIGHT", 40], ["FORWARD", 87], ["BACKWARD", 83]),
    }

    Camera.prototype = {
        constructor: Camera,
        //   @param {Keyboard} keyboard
        //   @param {Mouse} mouse
        update(keyboard, mouse) {
            for (var [key, value] of Object.entries(Camera.statics.controls)) {
                if (keyboard.isDown(value)) {
                    this.move(key); // UP, DOWN, LEFT, RIGHT, FORWARD, BACKWARD
                }
            }
            mouse.on('mousemove', (e) => {
                if (mouse.position.x < this.canvas.width / 2) {
                    this.rotate('LEFT');
                } else if (mouse.position.x > this.canvas.width / 2) {
                    this.rotate('RIGHT');
                }
            });
        },
        move(direction) {
            switch (direction) {
                case 'UP':
                    this.position.x -= this.speed;
                    break;
                case 'DOWN':
                    this.position.x += this.speed;
                    break;
                case 'LEFT':
                    this.position.y -= this.speed;
                    break;
                case 'RIGHT':
                    this.position.y += this.speed;
                    break;
                case 'FORWARD':
                    this.position.z += this.speed;
                    break;
                case 'BACKWARD':
                    this.position.z -= this.speed;
                    break;
            }
        },
        rotate(direction) {
            switch (direction) {
                case 'LEFT':
                    this.target.y -= this.speed;
                    break;
                case 'RIGHT':
                    this.target.y += this.speed;
                    break;
            }
        }
    }

    exports['Camera'] = Camera;


});

