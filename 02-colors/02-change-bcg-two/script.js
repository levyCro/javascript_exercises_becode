// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const button = document.querySelector('#run')
    button.addEventListener('click', () => {

        let inputColor = document.querySelector('#color').value
        document.body.style.backgroundColor = inputColor
    })

    

})();
