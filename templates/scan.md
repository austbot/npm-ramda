Scan is similar to [`reduce`](#reduce), but returns a list of successively
reduced values from the left

@func
@memberOf R
@since v0.10.0
@category List
@sig ((a, b) -> a) -> a -> [b] -> [a]
@param {Function} fn The iterator function. Receives two values, the accumulator and the
       current element from the array
@param {*} acc The accumulator value.
@param {Array} list The list to iterate over.
@return {Array} A list of all intermediately reduced values.
@see R.reduce
@example

     var numbers = [1, 2, 3, 4];
     var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
@symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
