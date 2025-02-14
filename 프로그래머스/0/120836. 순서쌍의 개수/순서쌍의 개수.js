function solution(n) {
    var count = 0;
    for (var i = 1; i <= n; i++) {
        var answer = n;
        var num = answer / i;
        if (num % 1 == 0) {
            count = count + 1;
        }
    }
    return count;
}