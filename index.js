function fibonacci(max) {

    let result = [0, 1];

     

        for (let i = 1; result[i] < max; i++) {

            result.push(result[i] + result[i - 1]);

        }

     
 
    console.log(result);
}
 
fibonacci(100);
