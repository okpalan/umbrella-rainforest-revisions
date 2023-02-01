/*
*A Vector Class
*/
function Vec3({x,y,z}){
    this.x =x;
    this.y=y;
    this.z=z;
}
Vec3.prototype.add = function (v){
if(typeof v ==='number'){
    this.x+=v;
    this.y+=v;
    this.z+=v;
}
else {
    this.x+=v.x;
    this.y += v.y;
    this.z += v.z;
    }
    return v
}

Vec3.prototype.project = function (v){

var dot = this.x * v.x + this.y * v.y;
var len = this.x * this.x + this.y * this.y;
return new Vec3(
    this.x * dot / len,
    this.y * dot / len,
    0);
}

Vec3.prototype.reflect = function (v) {
    var proj = this.project(v);
    return new Vec3(2 * proj.x - v.x, 2 * proj.y - v.y); 
}

Vec3.prototype.rotateX= function (theta){
         this.y = this.y * Math.cos(theta) - this.z * Math.sin(theta);
         this.z = this.y * Math.sin(theta) + this.z * Math.cos(theta);  
        return this;
}
Vec3.prototype.rotateY = function (theta){
     this.x = this.x * Math.cos(theta) - this.z * Math.sin(theta);
        this.z = this.x * Math.sin(theta) + this.z * Math.cos(theta);
        return this
}
Vec3.prototype.rotateZ= function (theta){
     this.x = this.x * Math.cos(theta) - this.y * Math.sin(theta);
        this.y = this.x * Math.sin(theta) + this.y * Math.cos(theta);
        return this;
}

export {Vec3} 
