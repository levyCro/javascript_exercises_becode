// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var fruits = [
    "apple",
    "pear",
    "raspberry",
    "tomatos",
    "kiwi",
    "banana",
    "orange",
    "mandarin",
    "durian",
    "peache",
    "grap",
    "cherry",
  ];

  // your code here
 document.querySelector('#run').addEventListener('click', () => {
    let text = "";
    for(let i = 0; i < fruits.length; i++) {
        text += fruits[i] + " ";
    }
    console.log(text);

 });
})();
