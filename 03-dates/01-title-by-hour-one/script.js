// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let target = document.querySelector('#target')
    let data = new Date
     let time = data.getHours()
     if(time < 18){
        target.innerHTML = "Hello"
     } else {
        target.innerHTML = "Good evening"
     }

})();
