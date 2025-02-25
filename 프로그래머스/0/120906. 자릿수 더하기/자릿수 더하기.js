// 프로그래머스 자릿수 더하기
function solution(n) {
    // n = String(n);
    n = n + '';
    // n = n.toString();
    // forEach(반환값없음), map(반환값 있음), filter, reduce
    const arr = n.split('');
    console.log(arr);

    // arr값을 Number 처리해서 바꿔달라는 의미
    const brr = arr.map(item => Number(item));
    console.log(brr);

    const sum = brr.reduce((a, b) => a + b, 0);
    return sum;
}

// 더 짧은 버전으로 풀이
function solution(n) {
    n = n + '';
    const sum = n.split('')
                .map(item => Number(item))
                .reduce((a, b) => a + b, 0);
    return sum;
}
