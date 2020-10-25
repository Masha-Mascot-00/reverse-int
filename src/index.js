module.exports = function reverse(n) {
    if (n < 0) {
        n *= -1;
    }
    n = String(n);
    let numberArray = n.split("");
    n = numberArray.reverse().join("");
    return Number(n);
};
