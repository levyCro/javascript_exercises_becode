// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    let target = document.querySelector('#target')
    const date = new Date();

    const n = date.toDateString();


    const time = date.toLocaleTimeString();


    target.innerHTML = n + " " + time;

})();