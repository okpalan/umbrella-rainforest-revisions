var Renderer = function ({ canvas, scene }) {
    this.canvas = canvas;
    this.scene = scene;
}
Renderer.prototypem = {
    set scene(scene) {
        this.scene = scene;
    },

    render: function () {
        this.scene.render();
    },

}

export { Renderer }
