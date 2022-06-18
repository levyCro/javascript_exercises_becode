// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function (operation) {
        // perform the operation
        const num1 = Number(document.querySelector('#op-one').value)
        const num2 = Number(document.querySelector("#op-two").value)

        switch (operation) {
            case (operation = "addition"):
                alert('your result is '+(num1 + num2));
                break;
            case (operation = "substraction"):
                alert('your result is '+(num1 - num2));
                break;
            case (operation = "multiplication"):
                alert('your result is '+(num1 * num2));
                break;
            case (operation = "division"):
                alert('your result is '+(num1 / num2));
                break;
            default:
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function ($btn) {
        $btn.addEventListener("click", function () {
            performOperation($btn.id);

        });
    });
})();