/*
================================================================================
                  IIFE - Immediately invoked function expression
================================================================================
*/

//this means running a function Immediately after it's declared
// The IIFE can be used to organize codes into modules


// 1.
(function() {
  console.log('Hey humans');
})();



//2.
let app = (function() {
  let team = 123;
  if(typeof(team) == 'number') {
    return 'Aye captain';
} else {
    return 'Negative captain';
}
})();

app;    //  then we can then use wat ever result is been returned to the app variable




/*
================================================================================
                    function closure
================================================================================
*/
let app = (function() {
  let carId = 123;
  let getId = function() {
    return carId;
  };
  return {
    logId : getId // refrence the inner getId function declared
  };
})();

console.log( app.logId());
