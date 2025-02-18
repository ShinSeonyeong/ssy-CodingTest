// 1번: split.revers.join 이용
function solution(my_string) {
    // var answer = '';
    return my_string.split("").reverse().join("");;
}

// 2번: for문 역순으로 뒤집기
function solution(my_string) {
    var answer = '';
    var temp = '';
    for (var i = my_string.length - 1; i >= 0; i--) {
        // console.log(my_string[i]);
        // console.log(i);
        // console.log(my_string.length - 1);
        answer = answer + my_string[i];
    }
    console.log(answer);
    return answer;
}

const res = solution("jaron");
console.log(res);
