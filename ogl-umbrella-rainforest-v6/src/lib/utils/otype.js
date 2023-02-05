import { mixin } from './mixin.js';


const NotYetImplemented = () => {
    throw new Error('Not yet implemented');
};


var abstracts = {
    data: Object.freeze({
        position: [0, 0, 0],
        vertices: [],
        indices: [],
        normals: [],
        rotation: [0, 0, 0],
        nSegments : 10
    }),
    methods: Object.freeze({
        update: NotYetImplemented,
    })
}

var Drawable = function () {
    mixin(this, abstracts.methods)
}

Drawable.prototype = {
    constructor: Drawable,
    data: Object.freeze(abstracts.data),
    draw: NotYetImplemented,
}

export { Drawable };

var Renderable = function () {
    mixin(this, abstracts.methods)
}

Renderable.prototype = {
    constructor: Renderable,
    data: Object.freeze(abstracts.data),
    render: NotYetImplemented,
}

export { Renderable };


    