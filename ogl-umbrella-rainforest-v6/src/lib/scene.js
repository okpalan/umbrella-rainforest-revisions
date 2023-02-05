
var Scene = function () {
    // All objects in the scene are rendered
    // However this distinction is the prototype chain
    // of the object 
    // All Tangables are drawn to the screen
    // All children are rendered but not drawn to the screen
    this.tangables = []; // objects that can be touched
    this.children = []; // objects that can't be touched(light)
    this.objects = [...this.tangables, ...this.children];
}

Scene.prototype.add = function (objects) {
    objects.forEach((object) => {
        if (object.tangible) {
            this.tangables.push(object);
        } else {
            this.children.push(object);
        }
    });
}



Scene.prototype.update = function () {
    // update all objects in the scene
    this.tangables.forEach((tangible) => {
        tangible.update();
    });
    this.children.forEach((child) => {
        child.render();
    });
}

Scene.prototype.remove = function (object) {
    // remove object from tangle or children
    if (this.tangables.indexOf(object) > -1) {
        this.tangables.splice(this.tangables.indexOf(object), 1);
    } else if (this.children.indexOf(object) > -1) {
        this.children.splice(this.children.indexOf(object), 1);
    }
}

export { Scene }