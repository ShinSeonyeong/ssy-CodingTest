function solution(str, number) {
    let answer = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < number; j++) {
            console.log(str[i]);
            answer = answer + str[i];
        }
    }
    return answer;
}