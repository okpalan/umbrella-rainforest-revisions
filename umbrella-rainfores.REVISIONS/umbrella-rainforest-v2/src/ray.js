import {Vec3} from './vector.js';

function Ray({position,direction}){
  this.position = position;
  this.direction = direction;
}

Ray.prototype.trace = function (){
  this.position.add(this.direction);
}

Ray.prototype.draw = function (context){
  context.beginPath();
  context.strokeStyle="white";
  context.moveTo(this.position.x,this.position.y);
  context.lineTo(this.position.x+this.direction.x,this.position.y+this.direction.y);
  context.stroke();
  return this;
}

export {Ray}