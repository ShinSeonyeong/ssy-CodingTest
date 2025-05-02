function solution(my_string, num1, num2) {
    var answer = '';
    var temp = my_string[num1];
    var str1 = my_string[num2];
    var str2 = temp;
    for (let i = 0; i < my_string.length; i++) {
        if (i === num1) {
            answer += str1;
        } else if (i === num2) {
            answer += str2;
        } else {
            answer += my_string[i];
        }
    }
    return answer;
}