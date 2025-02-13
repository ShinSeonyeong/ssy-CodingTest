function solution(n, t) {
    for (var i = 1; i <= t; i++) {
        if(i === 1) {
            var answer = 2 * i;
        }
        var n = answer * n;
    }
    var result = n;
    return result;
}