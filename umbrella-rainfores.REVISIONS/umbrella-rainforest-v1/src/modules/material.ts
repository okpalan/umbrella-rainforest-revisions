export { }
export class Material {
    specular: number;
    diffuse: number;
    ambient: number;
    shininess: number;
    constructor({ specular, diffuse, ambient, shininess }) {
        this.specular = specular;
        this.diffuse = diffuse;
        this.ambient = ambient;
        this.shininess = shininess;
    }
}
