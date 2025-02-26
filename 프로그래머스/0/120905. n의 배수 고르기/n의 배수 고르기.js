function solution(n, numlist) {
    var answer = [];
    var count = 0;
    for (let i = 0; i < numlist.length; i++) {
        //numlist[i]의 값이 n의 배수일 때
        if (numlist[i] % n == 0) {
            answer[count] = numlist[i];
            count++;
        }
    }
    return answer;
}