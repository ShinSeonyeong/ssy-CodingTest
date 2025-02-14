// 1번풀이
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

// 2번풀이
function solution(n, t) {
    var answer = n;
    for (let i = 0; i < t; i++) {
        answer = answer * 2;
    }
    return answer;
}
