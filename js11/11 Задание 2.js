function isPrime(num) {
    let _true = 'число простое';
    let _false = 'ответ неверный';
    if (num <= 1 || num > 1000) {
        return _false;
    } else if (num == 2) {
        return _true;
    }
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
        return _false;
        }
    }
    return _true;
}
console.log(isPrime(prompt('Введите число')));
console.log(isPrime(5));