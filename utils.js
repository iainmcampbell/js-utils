module.exports = {

  /*

    ###  ###  ##### ###### ##   ##  ####
    ######## ##   ##  ##   ##   ## ##
    ## ## ## #######  ##   #######  ####
    ##    ## ##   ##  ##   ##   ##     ##
    ##    ## ##   ##  ##   ##   ## #####

  */

  rand: function (low, high){
    var u = Math.random();
    return (1-u)*low + u*high;
  },

  mapRange: function (value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  },

  // randomize true/false
  randBool: function (){
    return (Math.random()<0.5)
  },

  // randomize positive/negative status of a number
  // ie given 2, will return either -2 or 2
  posneg: function (num){
    return (Math.random()<0.5) ? num : -num
  },

  // linear interpolation
  lerp: function (start, end, now) {
    return (1 - now) * start + now * end;
  },

  // limit if limit is less than num
  least: function (){
    var l
    for (var i = 0; i < arguments.length; i++) {
      if(!l) l = arguments[i]
      if(l && arguments[i] < l)
        l = arguments[i]
    }
    return l
  },

  precision: function (number, precision){
    return parseFloat( number.toFixed(precision) )
  },

  normalizeDegrees: function(deg){
    if(deg > 360){
      return 360 - (deg % 360)
    } else if(deg < 0){
      return 360 + (deg % 360)
    } else {
      return deg
    }
  },

 radToDeg: function(rad){ return 360 * (rad / (Math.PI*2)) },
 degToRad: function(deg){ return (deg / 360) * (Math.PI*2) },



  /*

     #### ###### #####  #### ###  ##  #####  ####
    ##      ##   ##  ##  ##  #### ## ##     ##
     ####   ##   #####   ##  ## #### ##  ### ####
        ##  ##   ##  ##  ##  ##  ### ##   ##    ##
    #####   ##   ##  ## #### ##   ##  ##### #####

  */

  stripUrls: function (string){
    return string.replace(/(http|https):\S*/g, '')
  },

  // global find and replace
  replaceAll: function(string, search, replacement){
    return string.replace(new RegExp(search, 'g'), replacement)
  },

  pad: function(number, width, zeroCharacter) {
    zeroCharacter = zeroCharacter || '0';
    number = number + '';
    return number.length >= width ? number : new Array(width - number.length + 1).join(zeroCharacter) + number;
  },


  /*

     #####  #####  #####   ##### ##    ## ####
    ##   ## ##  ## ##  ## ##   ## ##  ## ##
    ####### #####  #####  #######  ####   ####
    ##   ## ##  ## ##  ## ##   ##   ##       ##
    ##   ## ##  ## ##  ## ##   ##   ##   #####

  */


  // Reorders array values randomly.
  shuffleArray: function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  },

  // remove string from array
  remove: function (array, string){
    var i = array.indexOf(string)
    if( i !== -1 ) array.splice(i,1)
  },




  /*

     ###### ###### ##   ## ###### #####
    ##    ##  ##   ##   ## ##     ##  ##
    ##    ##  ##   ####### #####  #####
    ##    ##  ##   ##   ## ##     ##  ##
     ######   ##   ##   ## ###### ##  ##

  */

  loadImg: function (src){
    return new Promise(function(resolve, reject){
      var img = new Image()
      img.onload = resolve.bind(null, img)
      img.onnerror = reject.bind(img)
      img.src = src
    })
  },

  timeoutPromise: function(duration){
    return new Promise(function(resolve){
      setTimeout(resolve, duration)
    })
  },

  // shallow object extend
  extend: function (){
    var output = {}
    var args = arguments
    var l = args.length

    for ( var i = 0; i < l; i++ )
      for ( var key in args[i] )
        if ( args[i].hasOwnProperty(key) ){
          output[key] = args[i][key]
        }

    return output
  },

  /*

    shallow object diff:
    returns true if objects have changed, false if objects are identical

  */
  diff: function(a, b){
    var aKeys = Object.keys(a)
    var bKeys = Object.keys(b)

    if(aKeys.length !== bKeys.length){
      return true
    }

    for (var i = aKeys.length - 1; i >= 0; i--) {
      if(bKeys.indexOf(aKeys[i]) === -1)
        return true
      else if( a[aKeys[i]] !== b[aKeys[i]] )
        return true
    }

    return false
  },

  /*

    helper function for Mithril.js

    computeClass({
      'is-visible': true,
      'is-active':  true,
    })

    returns 'is-visible is-active'

  */
  computeClass: function(obj){
    var className = ''
    Object.keys(obj).forEach(function(key){
      if(obj[key])
        className += ' '+ key
    })
    return className
  },

  /*

    very simple templating:

    var result = varstring('{one}, {two}', { one: 1, two: 2 })
    -> '1, 2'

  */
  varstring: function(string, params) {
    if(params instanceof Object) {
      //do nothing
    }
    else if(!(params instanceof Array)) {
      params = Array.prototype.slice.call(arguments)
      string = params.shift()
    }

    Object.keys(params).forEach(function(v) {
      string = string.replace(new RegExp('{'+v+'}','g'),params[v])
    })
    return string
  },


}