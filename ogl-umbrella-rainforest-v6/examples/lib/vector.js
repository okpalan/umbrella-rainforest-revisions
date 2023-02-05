
// a vec2 is a 2D vector with 
// x and y components.
var Vec2 = function (x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Object.defineProperty(Vec2, "I", {
    get: function () {
        return new Vec2(1, 0);
    },
    enumerable: true,
    configurable: false
})

Object.defineProperty(Vec2, "J", {
    get: function () {
        return new Vec2(0, 1);
    },
    enumerable: true,
    configurable: false
})

/**
 * Vec2.isScalar is a function that checks if the 
 * argument is a scalar.
 * @param {*} s 
 * @returns 
 */

Object.defineProperty(Vec2, "isScalar", {
    value: function (s) {
        return typeof s === 'number';
    },
    enumerable: true,
    configurable: false
})


Object.defineProperty(Vec2, "from", {
    value: function (v) {
        if (Array.isArray(v)) {
            return new Vec2(v[0], v[1]);
        } else if (Vec2.isVec2(v)) {
            return new Vec2(v.x, v.y);
        } else if (Vec2.isScalar(v)) {
            return new Vec2(v, v);
        }
    },
    enumerable: true,
    configurable: false
})
/**
* 
* @param {*} v 
* @returns 
*/
Object.defineProperty(Vec2, "isVec2", {
    get: function (v) {
        for (const key of ['x', 'y']) {
            if (!v.hasOwnProperty(key)) {
                return false;
            } else {
                return true;
            }
        }
    },
    enumerable: true,
    configurable: false
})

Vec2.prototype = {
    /**
     *  
     * @param {*} v
     * @returns
     */
    add: function (v) {
        if (Vec2.isVec2(v)) {
            this.x += v.x;
            this.y += v.y;
        } else if (Vec2.isScalar(v)) {
            this.x += v;
            this.y += v;
        }
        return this;
    },
    /**
     * 
     * @param {*} v
     * @returns
     */
    sub: function (v) {
        if (Vec2.isVec2(v)) {
            this.x -= v.x;
            this.y -= v.y;
        } else if (Vec2.isScalar(v)) {
            this.x -= v;
            this.y -= v;
        }
        return this;
    },
    /**
     * 
     * @param {*} v
     * @returns
     */
    dot: function (v) {
        if (Vec2.isVec2(v)) {
            this.x *= v.x;
            this.y *= v.y;
        } else if (Vec2.isScalar(v)) {
            this.x *= v;
            this.y *= v;
        }
        return this;

    },
    /**
     * 
     * @param {*} v
     * @returns
     */
    cross: function (v) {
        if (Vec2.isVec2(v)) {
            this.x *= v.x;
            this.y *= v.y;
        } else if (Vec2.isScalar(v)) {
            this.x *= v;
            this.y *= v;
        }
        return this;
    },
    /**
     * 
     * @param {*} v
     * @returns
     */
    div: function (v) {
        if (Vec2.isVec2(v)) {
            this.x /= v.x;
            this.y /= v.y;
        } else if (Vec2.isScalar(v)) {
            this.x /= v;
            this.y /= v;
        }
        return this;
    },
    mag: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    norm: function () {
        var mag = this.mag();
        this.x /= mag;
        this.y /= mag;
        return this;
    },
    distance: function (v) {
        if (Vec2.isVec2(v)) {
            var dx = this.x - v.x;
            var dy = this.y - v.y;
            return Math.sqrt(dx * dx + dy * dy);
        }
    },
    clone: function () {
        return new Vec2(this.x);
    },

    /**
     * 
     * @param {*} theta 
     * @returns 
     */
    rotX: function (theta) {
        var cos = Math.cos(theta);
        var sin = Math.sin(theta);
        var y = this.y;
        this.y = y * cos - this.z * sin;
        this.z = y * sin + this.z * cos;
        return this;
    },
    /**
     * 
     * @param {*} theta 
     * @returns 
     */
    rotY: function (theta) {
        var cos = Math.cos(theta);
        var sin = Math.sin(theta);
        var x = this.x;
        this.x = x * cos - this.z * sin;
        this.z = x * sin + this.z * cos;
        return this;
    },
    /**
     * 
     * @param {*} theta
     * @returns
     **/
    rotZ: function (theta) {
        var cos = Math.cos(theta);
        var sin = Math.sin(theta);
        var x = this.x;
        this.x = x * cos - this.y * sin;
        this.y = x * sin + this.y * cos;
        return this;
    },

}
export { Vec2 };

var Vec3 = function (x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Object.defineProperty(Vec3, "I", {
    get: function () {
        return new Vec3(1, 0, 0);
    },
    enumerable: true,
    configurable: false
})

Object.defineProperty(Vec3, "J", {
    get: function () {
        return new Vec3(0, 1, 0);
    }
})

Object.defineProperty(Vec3, "K", {
    get: function () {
        return new Vec3(0, 0, 1);
    }
})

Object.defineProperty(Vec3, "isScalar", {
    value: function (s) {
        return typeof s === 'number';
    }
})

Object.defineProperty(Vec3, "from", {
    value: function (v) {
        if (Vec3.isVec3(v)) {
            return new Vec3(v.x, v.y, v.z);
        } else if (Vec3.isScalar(v)) {
            return new Vec3(v, v, v);
        } else if (Array.isArray(v)) {
            return new Vec3(v[0], v[1], v[2]);
        }
    }

})

Object.defineProperty(Vec3, "isVec3", {
    value: function (v) {
        for (const key of ['x', 'y', 'z']) {
            if (!v.hasOwnProperty(key)) {
                return false;
            } else {
                return true;
            }
        }
    }
})

Vec3.prototype = {
    add: function (v) {
        if (Vec3.isVec3(v)) {
            this.x += v.x;
            this.y += v.y;
            this.z += v.z;
        } else if (Vec3.isScalar(v)) {
            this.x += v;
            this.y += v;
            this.z += v;
        }
        return this;
    },
    
    set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    },
    copy: function (v) {
        if (Vec3.isVec3(v)) {
            this.x = v.x;
            this.y = v.y;
            this.z = v.z;
        } else if (Vec3.isScalar(v)) {
            this.x = v;
            this.y = v;
            this.z = v;
        }
        return this;
    },

    sub: function (v) {
        if (Vec3.isVec3(v)) {
            this.x -= v.x;
            this.y -= v.y;
            this.z -= v.z;
        } else if (Vec3.isScalar(v)) {
            this.x -= v;
            this.y -= v;
            this.z -= v;
        }
        return this;
    }
    ,
    dot: function (v) {
        if (Vec3.isVec3(v)) {
            this.x *= v.x;
            this.y *= v.y;
            this.z *= v.z;
        } else if (Vec3.isScalar(v)) {
            this.x *= v;
            this.y *= v;
            this.z *= v;
        }
        return this;
    },
    cross: function (v) {
        if (Vec3.isVec3(v)) {
            this.x = this.y * v.z - this.z * v.y;
            this.y = this.z * v.x - this.x * v.z;
            this.z = this.x * v.y - this.y * v.x;
        } else if (Vec3.isScalar(v)) {
            this.x *= v;
            this.y *= v;
            this.z *= v;
        }
        return this;
    },
    div: function (v) {
        if (Vec3.isVec3(v)) {
            this.x /= v.x;
            this.y /= v.y;
            this.z /= v.z;
        } else if (Vec3.isScalar(v)) {
            this.x /= v;
            this.y /= v;
            this.z /= v;
        }
        return this;
    }
    ,
    rotY: function (theta) {
        var cos = Math.cos(theta);
        var sin = Math.sin(theta);
        var x = this.x * cos - this.z * sin;
        var z = this.x * sin + this.z * cos;
        this.x = x;
        this.z = z;
        return this;
    },
    rotX: function (theta) {
        var cos = Math.cos(theta);
        var sin = Math.sin(theta);
        var y = this.y * cos - this.z * sin;
        var z = this.y * sin + this.z * cos;
        this.y = y;
        this.z = z;
        return this;
    },

    rotZ: function (theta) {
        var cos = Math.cos(theta);
        var sin = Math.sin(theta);
        var x = this.x * cos - this.y * sin;
        var y = this.x * sin + this.y * cos;
        this.x = x;
        this.y = y;
        return this;
    },

    mag: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },
    norm: function () {
        var mag = this.mag();
        this.x /= mag;
        this.y /= mag;
        this.z /= mag;
        return this;
    }
    ,
    distance: function (v) {
        if (Vec3.isVec3(v)) {
            var dx = this.x - v.x;
            var dy = this.y - v.y;
            var dz = this.z - v.z;
            return Math.sqrt(dx * dx + dy * dy + dz * dz);
        }
    }
    ,
    clone: function () {
        return new Vec3(this);
    },

    proj(v) {
        var mag = v.mag();
        return this.dot(v)
            .div((mag * mag))
            .dot(v)
    },
    reflect: function (v) {
        return this
            .project(v)
            .mul(2).sub(v);
    },
    get projection() {
        return this.project(v)
    },
    get reflection() {
        return this.reflect(v)
    },



}

export { Vec3 };
