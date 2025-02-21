
function solution(array, height) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        count = array[i] > height ? count+1 : 0;
    }
    return count;
}