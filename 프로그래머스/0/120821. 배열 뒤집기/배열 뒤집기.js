// 1번 방법
function solution(num_list) {
    var reverse_list = num_list.reverse();
    return reverse_list;
}


// 2번 방법
function solution(num_list) {
    for (var i = 0; i <= parseInt(num_list.length / 2); i++){
        var temp = num_list[i];
        num_list[i] = num_list[num_list.length - (i + 1)];
        num_list[num_list.length - (i + 1)] = temp;
    }
    console.log(num_list);
    return num_list;
}
