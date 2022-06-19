// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function () {

        // your code here
        let numbers = document.querySelector('#numbers').value

        let numberStringArray = numbers.split(",").map(Number);


        numberStringArray.sort(function (a, b) {
            return a - b;
        });
        alert(numberStringArray)

    });

})();