/*

  Vector

    understands common conventions:
      new Vector(0,0)
      new Vector({ x: 0, y: 0 })
      new Vector( existingVector )

*/

var Vector = function(){
  if(typeof arguments[0] === 'number'){
    this.x = arguments[0] || 0
    this.y = arguments[1] || 0
  } else {
    this.x = arguments[0].x || 0
    this.y = arguments[0].y || 0
  }

}

Vector.prototype.add = function(){
  if(typeof arguments[0] === 'number')
    return new Vector(this.x + arguments[0], this.y + arguments[1])
  else
    return new Vector(this.x + arguments[0].x, this.y + arguments[0].y)
}

Vector.prototype.subtract = function(){
  if(typeof arguments[0] === 'number')
    return new Vector(this.x - arguments[0], this.y - arguments[1])
  else
    return new Vector(this.x - arguments[0].x, this.y - arguments[0].y)
}

// multiply by scalar
Vector.prototype.multiply = function(){
  return new Vector(this.x * arguments[0], this.y * arguments[0])
}

// divide by scalar
Vector.prototype.divide = function(){
  return new Vector(this.x / arguments[0], this.y / arguments[0])
}


// magnitude always comes out positive (because we're squaring x & y)
Vector.prototype.magnitude = function(){
  return Math.sqrt(this.x*this.x + this.y*this.y)
}

// divide vector by its own magnitude
Vector.prototype.normalize = function(){
  var magnitude = this.magnitude()
  if(magnitude > 0)
    return this.divide(magnitude)
  else
    return this
}


// angle (in radians)
Vector.prototype.angle = function(){
  return Math.atan( this.y / this.x )
}




module.exports = Vector
