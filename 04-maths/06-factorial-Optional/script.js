// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        let  inputNumber = document.querySelector('#number').value
        function factorial(n) {
          let answer = 1;
          if (n == 0 || n == 1) {
            return answer;
          } else {
            for (var i = n; i >= 1; i--) {
              answer = answer * i;
            }
            return answer;
          }
        }
        let n = inputNumber;
        answer = factorial(n);
        console.log("The factorial of " + n + " is " + answer);

    });

})();
