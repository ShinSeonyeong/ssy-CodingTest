function solution(a, b, n) {
    let sum = 0;
    while (true) {
        sum = sum + Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + (n % a);
        if (n < a) break;
    }
    return sum;
}
