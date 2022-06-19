// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise",
  ];

  // your code here
  document.querySelector("#run").addEventListener("click", () => {
    let fruitsChangeArray = fruits.slice(1, -1);
    fruitsChangeArray.push("Banana");
    fruitsChangeArray.unshift("kiwi");

    alert(fruitsChangeArray);
  });
})();
