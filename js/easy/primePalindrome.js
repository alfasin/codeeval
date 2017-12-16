function isPali(n) {
    var rev = n.split('').reverse().join('');
    return n === rev;
}

function isPrime(n) {
    var i = 2;
    for (; i <= Math.sqrt(n); i+= 1) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

for (var i = 999;i > 1; i -= 1) {
    if (isPali(i + "") && isPrime(i)) {
        console.log(i);
        break;
    }
}
