function solution(money) {
    var drink = parseInt(money / 5500);
    var change = money % 5500;
    
    answer = [parseInt(drink), change];
    return answer;
}