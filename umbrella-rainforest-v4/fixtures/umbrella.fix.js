import OGL from "../src/ogl.js";
console.log(OGL);
var canvas = new OGL.Canvas({
    width: 800,
    height: 600,
    background: "#000000",
    container: document.body,
});

var umbrella = new OGL.HemiSphere({
    position: new Vec3(canvas.width / 2, canvas.height / 2, 100),
    radius: 50,
    segments: 10,
});


var camera = new OGL.Camera({
    position: new Vec3(0, 0, 0),
    target: umbrella.position,
    fov: 45,

})


