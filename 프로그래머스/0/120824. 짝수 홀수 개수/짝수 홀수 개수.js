// 1. 
function solution(num_list) {
    var even_count = 0;
    var odd_count = 0;
    for (var i = 0; i <= num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            even_count = even_count + 1;
            console.log(num_list[i]);
            console.log(`even_count ${even_count}`);
        }
        if (num_list[i] % 2 === 1) {
            odd_count = odd_count + 1;
            console.log(`odd_count ${odd_count}`);
        }
    }
    console.log(`even_count ${even_count}`);
    console.log(`odd_count ${odd_count}`);
    var answer = [even_count, odd_count];
    return answer;
}

// 2. 
function solution(num_list) {
    var answer = [];
    for (let i = 0; i < num_list.length; i++) {
        // console.log(num_list[i]);
        if (num_list[i] % 2 == 0) {
            answer[0] = answer[0] ?? 0;
            answer[0] = answer[0] + 1;
            console.log(`answer=${answer[0]}`);
        }else{
            answer[1] = answer[1] ?? 0;
            answer[1] = answer[1] + 1;
            console.log(`answer=${answer[1]}`);
        }
    }

    return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1,3,5,7]));
