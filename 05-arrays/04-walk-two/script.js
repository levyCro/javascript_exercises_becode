 // NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
      document.querySelector("#run").addEventListener("click", () => {
        let text = "";
        fruits.forEach(listOfFruits);
        alert(text);
        function listOfFruits(item, index) {
          text += +" "+ index + " : " +item +" ";
        
        }
      });

})();
