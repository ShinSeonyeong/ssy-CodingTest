
function solution(sides) {
    let max_num = Math.max(...sides);
    let sum = sides.reduce((acc, cur) => acc + cur, 0) - max_num; // 나머지 두 변의 합

    return max_num < sum ? 1 : 2;
}


// function solution(sides) {
//     var answer = 0;
//     var res;
//     var max_num = Math.max(...sides);
//     for (var i = 0; i < sides.length; i++) {
//         if (max_num != sides[i]) {
//             answer = answer + sides[i];
//         }
//     }

//     if (max_num == answer || max_num > answer) {
//         res = 2;
//         console.log('res' + res);
//     } else {
//         res = 1;
//         console.log('res' + res);
//     }
//     return res;
// }
