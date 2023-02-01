import { Vec3 } from "./vector";
export { HemiSphere };

function HemiSphere({ position, radius }) {
    this.position = position;
    this.radius = radius;
};

HemiSphere.prototype = {
    get surface() {
        return {
            base: {
                perimeter: (2 * Math.PI) * this.radius,
                area: Math.pow(this.radius, 2) * Math.PI,
            },
            top: {
                perimeter: Math.pow(this.radius, 2),
            }
        }
    },
     points: function*() {
        const { x, y, z } = this.position;  
        const { base, top } = this.surface;
        const { perimeter: basePerimeter, area: baseArea } = base;
        const { perimeter: topPerimeter } = top;
        const basePoints = Math.ceil(basePerimeter / 10);
        const topPoints = Math.ceil(topPerimeter / 10);
        const baseAngle = 360 / basePoints;
        const topAngle = 360 / topPoints;
        const baseRadius = Math.sqrt(baseArea / Math.PI);
        const topRadius = Math.sqrt(topPerimeter / Math.PI);
        for (let i = 0; i < basePoints; i++) {
            const angle = baseAngle * i;
            const x = baseRadius * Math.cos(angle);
            const y = baseRadius * Math.sin(angle);
            yield new Vec3(x, y, z);
        }
        for (let i = 0; i < topPoints; i++) {
            const angle = topAngle * i;
            const x = topRadius * Math.cos(angle);
            const y = topRadius * Math.sin(angle);
            yield new Vec3(x, y, z);
        }
    },

    draw(context) {
        context.beginPath();
        for (let point of this.points()) {
            context.lineTo(point.x, point.y);
        }
        context.closePath();
        context.stroke();
    }

};

// create a camera
// a vector in an objection

var camera = {
    position: new Vec3(0, 0, 0),
    target : new Vec3(0, 0, 0),
    
}