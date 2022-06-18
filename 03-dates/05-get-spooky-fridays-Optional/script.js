// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here

    let button = document.querySelector("#run");
    button.addEventListener('click', () => {
        let inputYear = document.querySelector("#year").value;
       let result =calculateYear13(inputYear)
       alert(result);
    })
    function calculateYear13(year) {
          const date = new Date();
          let counter = 0;
          let month;

          for (month = 0; month < 12; month++) {
            date.setFullYear(year, month, 13);
            if (date.getDay() == 5) {
              counter++;
            }
          }
          return counter;
       
    }



})();