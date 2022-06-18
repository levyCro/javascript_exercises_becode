// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const output = [];
    let count = 1;

    for(count = 1; count <= 100; count++) {
        
        if(count % 3 === 0 && count % 5 === 0) {
            output.push('Fizz Buzz')
        } else if(count % 3 === 0){
            output.push('Fizz')
        } else if(count % 5 === 0){
            output.push('Buzz')
        } else {
            output.push(count)
        }
        
    }
    console.log(output);

})();
