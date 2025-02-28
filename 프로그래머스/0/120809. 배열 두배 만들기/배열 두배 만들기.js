function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        answer.push(element*2);
    }
    return answer;
}
