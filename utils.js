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
  }

  mapRange: function (value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  }

  // randomize true/false
  randBool: function (){
    return (Math.random()<0.5)
  }

  // randomize positive/negative status of a number
  // ie given 2, will return either -2 or 2
  posneg: function (num){
    return (Math.random()<0.5) ? num : -num
  }

  // linear interpolation
  lerp: function (start, end, now) {
    return (1 - now) * start + now * end;
  }

  // limit if limit is less than num
  least: function (){
    var l
    for (var i = 0; i < arguments.length; i++) {
      if(!l) l = arguments[i]
      if(l && arguments[i] < l)
        l = arguments[i]
    }
    return l
  }

  precision: function (number, precision){
    return parseFloat( number.toFixed(precision) )
  }



  /*

     #### ###### #####  #### ###  ##  #####  ####
    ##      ##   ##  ##  ##  #### ## ##     ##
     ####   ##   #####   ##  ## #### ##  ### ####
        ##  ##   ##  ##  ##  ##  ### ##   ##    ##
    #####   ##   ##  ## #### ##   ##  ##### #####

  */

  // remove string from array
  remove: function (array, string){
    var i = array.indexOf(string)
    if( i !== -1 ) array.splice(i,1)
  }

  stripUrls: function (string){
    return string.replace(/(http|https):\S*/g, '')
  }



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
      img.onload = function(){ resolve(img) }
      img.src = src
    })
  }

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
  }


}