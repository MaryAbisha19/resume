function even_digits(num) {
    var ctr = 0;
    while (num) {
        ctr += num % 2 == 0;
        num = Math.floor(num/10);
    }
    return ctr;
}
console.log(even_digits(1 4 5 8 9 1 0));