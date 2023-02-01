
function intersects(ray, target) {
    let d = ray.direction
    let o = ray.position;
    let t = target;
    let a = d.x * d.x + d.y * d.y + d.z * d.z;
    let b = 2 * (d.x * (o.x - t.x) + d.y * (o.y - t.y) + d.z * (o.z - t.z));
    let c = (o.x - t.x) * (o.x - t.x) + (o.y - t.y) * (o.y - t.y) + (o.z - t.z) * (o.z - t.z) - 1;
    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        discriminant = Math.sqrt(discriminant);
        let t1 = (-b - discriminant) / (2 * a);
        let t2 = (-b + discriminant) / (2 * a);
        if (t1 > 0 || t2 > 0) 
        console.log("Hit with projection: " + t1 + " " + t2);
        {
            return true // hit 
        }
    }
    return false;
}

export { intersects }