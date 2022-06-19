// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

    //     // your code here
         
function countSquares(a, b) {
  return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
}

// Driver code

let a = 1;
let b = 21;
console.log("Count of squares is ", countSquares(a, b));

     });

})();
