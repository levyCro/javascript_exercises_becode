// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    // your code here
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {

            switch (button) {
                case (button = document.querySelector("#red")):
                    document.body.style.backgroundColor = "red";
                    break;
                case (button = document.querySelector("#green")):
                    document.body.style.backgroundColor = "green";
                    break;
                case (button = document.querySelector("#yellow")):
                    document.body.style.backgroundColor = "yellow";
                    break;
                case (button = document.querySelector("#blue")):
                    document.body.style.backgroundColor = "blue";
                    break;
                default:
                    console.log("error");
            }

        });

    });
})();