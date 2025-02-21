function solution(numbers) {
    var answer = 0;
    var count = 0;
    for(var i = 0; i < numbers.length; i++){
        answer = answer + numbers[i];
        count ++;
    }
    console.log(answer);
    console.log(count);
    return answer/count;
}