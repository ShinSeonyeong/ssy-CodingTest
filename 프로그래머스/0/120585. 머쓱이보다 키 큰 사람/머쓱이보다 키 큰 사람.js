// 1. 삼항연산자 사용
// function solution(array, height) {
//     var count = 0;
//     for (var i = 0; i < array.length; i++) {
//         count = array[i] > height ? count+1 : 0;
//     }
//     return count;
// }

// 2. if 사용

function solution(array, height) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > height){
            console.log(array[i]);
            count += 1;
        }
    }
   return count;
}