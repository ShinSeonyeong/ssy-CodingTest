// 1번 방법
function solution(my_string, letter) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        console.log(my_string[i]);
        if (my_string[i] !== letter)
            answer = answer + my_string[i];
    }
    return answer;
}

// 2번 방법
function solution(my_string, letter) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] == letter) {
        } else {
            answer = answer + my_string[i];
        }
    }
    return answer;
}
