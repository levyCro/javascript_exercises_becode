// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const button = document.querySelector('#run')
    button.addEventListener('click', () => {
        let randomColor = Math.floor( Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = `#${randomColor}`
    })

    

})();
