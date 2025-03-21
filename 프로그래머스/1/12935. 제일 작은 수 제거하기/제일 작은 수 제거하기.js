function solution(arr) {
    const min = Math.min(...arr)
    const answer = arr.filter((item) => {
        return item !== min;
    })
    if (answer.length == 0) return [-1];
    return answer;
}