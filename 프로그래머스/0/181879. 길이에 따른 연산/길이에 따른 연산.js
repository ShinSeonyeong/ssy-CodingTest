function solution(num_list) {
    var answer = 0;
    var cross = 1;
    if(num_list.length > 10){
        for (let i = 0; i < num_list.length; i++) {
            answer += num_list[i]
        }
        return answer;
    } else {
        for (let i = 0; i < num_list.length; i++) {
            cross *= num_list[i]
        }
        return cross;
    }
}