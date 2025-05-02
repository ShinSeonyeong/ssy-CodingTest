function solution(myString) {
    var answer = '';
    for (let i = 0; i < myString.length; i++) {
        answer += myString.toLowerCase() ? myString[i].toUpperCase() : myString[i];
    }
    return answer;
}