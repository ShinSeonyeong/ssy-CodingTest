// filter 사용해서 풀이
function solution(arr) {
    const min = Math.min(...arr)
    const answer = arr.filter((item) => {
        return item !== min;
    })
    if (answer.length == 0) return [-1];
    return answer;
}


// splice 사용해서 풀이
function solution(arr) {
    const min = Math.min(...arr);

    const minIndex = arr.indexOf(min);
    arr.splice(minIndex, 1); // 가장 작은 겂 하나 삭제
    const answer = arr;

    if (answer.length == 0) return [-1];
    return answer;

}
