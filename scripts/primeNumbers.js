function getPrimeNumbers(max) {
    const primeNumbers = [1];

    for (let i = 2; i <= max; i++) {
        let isPrime = true;
        
        for (let j = 0; j < primeNumbers.length; j++) {
            if (i % primeNumbers[j] === 0
                && primeNumbers[j] !== i
                && primeNumbers[j] !== 1) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers;
}