// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let target = document.querySelector('#target')
    const time = new Date();
    var cutoff = new Date();
    cutoff.setHours(
      17,
      30,
      0,
      0
    ); 

    if (time <= cutoff) {
      target.innerHTML = 'Hello'
    } else {
        target.innerHTML = 'good evening'
    }
    

})();
