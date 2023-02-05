"use strict";

import { Drawable,Renderable } from "./utils/main.js"

var HemiSphere = function HemiSphere(radius, segments) {
    Drawable.call(this,);
    this.radius = radius;
    this.segments = segments;

}

HemiSphere.prototype = Object.create(Drawable.prototype);
HemiSphere.prototype.constructor = HemiSphere;

HemiSphere.prototype[Symbol.iterator] = function *(){
    // add vectors to vertices
    // for each segment
    for(var i = 0; i < this.segments; i++){
        // for each vertex
        for(var j = 0; j < this.segments; j++){
            // add vertex
            this.vertices.push(new Vec3(
                this.radius * Math.cos(i * 2 * Math.PI / this.segments) * Math.sin(j * Math.PI / this.segments),
                this.radius * Math.sin(i * 2 * Math.PI / this.segments) * Math.sin(j * Math.PI / this.segments),
                this.radius * Math.cos(j * Math.PI / this.segments)
            ));
        }
    }

    for (var i = 0; i < this.vertices.length; i++) {
        yield this.vertices[i];
    }
}

HemiSphere.prototype.draw = function (ctx) {
    var i = 0;
    for (var segment of this) {
        ctx.beginPath();
        ctx.moveTo(segment.x, segment.y);
        ctx.lineTo(this.vertices[i + 1].x, this.vertices[i + 1].y);
        ctx.stroke();
        i++;
    }
}

HemiSphere.prototype.data = {
    segments: 10,
    radius: 100,
}



export { HemiSphere };
