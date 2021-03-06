Converts an object into an array of key, value arrays. The object's own
properties and prototype properties are used. Note that the order of the
output array is not guaranteed to be consistent across different JS
platforms.

@func
@memberOf R
@since v0.4.0
@category Object
@sig {String: *} -> [[String,*]]
@param {Object} obj The object to extract from
@return {Array} An array of key, value arrays from the object's own
        and prototype properties.
@example

     var F = function() { this.x = 'X'; };
     F.prototype.y = 'Y';
     var f = new F();
     R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
