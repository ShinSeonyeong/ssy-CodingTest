function solution(array) {
    answer = array.sort((a, b) => a - b);
    center = Math.floor(array.length / 2);
    
    return answer[center];
}