// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    let inputOne = document.querySelector("#op-one");
    let inputTwo = document.querySelector("#op-two");
    

    document.querySelector("#addition").addEventListener("click", function() {
        // perform an addition
        const num1 = Number(inputOne.value);
        const num2 = Number(inputTwo.value);
        const add = num1 + num2;
        alert(`Adding Up ${num1} + ${num2} = ${add}`);
        
    });

    document.querySelector("#substraction").addEventListener("click", function() {
        // perform an substraction
          const num1 = Number(inputOne.value);
          const num2 = Number(inputTwo.value);
          const add = num1 - num2;
          alert(`Substraction  ${num1} - ${num2} = ${add}`);
    });

    document.querySelector("#multiplication").addEventListener("click", function() {
        // perform an multiplication
          const num1 = Number(inputOne.value);
          const num2 = Number(inputTwo.value);
          const add = num1 * num2;
          alert(`Multiplying  ${num1} * ${num2} = ${add}`);
    });

    document.querySelector("#division").addEventListener("click", function() {
        // perform an division
          const num1 = Number(inputOne.value);
          const num2 = Number(inputTwo.value);
          const add = num1 / num2;
          alert(`Divideing ${num1} / ${num2} = ${add}`);
    });
})();
