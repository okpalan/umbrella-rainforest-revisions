
function Material({
    diffuse,
    specular,
    ambient,
    shininess,
}) {
    this.diffuse = diffuse;
    this.specular = specular;
    this.ambient = ambient;
    this.shininess = shininess;
}
Material.prototype = {
    constructor: Material
}

export { Material };