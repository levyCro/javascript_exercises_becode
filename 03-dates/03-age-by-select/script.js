// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  const button = document.querySelector("#run");
  button.addEventListener("click", () => {
   const day = document.querySelector("#dob-day").value;
   const month = document.querySelector("#dob-month").value;
   const year = document.querySelector("#dob-year").value;
    let currentYear = new Date().getFullYear();
    let calcYearsOld = currentYear - year;

    alert('you are '+calcYearsOld+ " old");
    console.log(day + " " + month + " " + year);
  });

  
})();
