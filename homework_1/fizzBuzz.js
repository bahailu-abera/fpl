function fizzBuzz() {
    for (let num = 1; num <= 100; num++) {
        const output = 
            (num % 3 === 0 && num % 5 === 0 && "FizzBuzz") ||
            (num % 3 == 0 && "Fizz") || 
            (num % 5 == 0 && "Buzz") ||
            (num);

        console.log(output);
    }
}

fizzBuzz()
