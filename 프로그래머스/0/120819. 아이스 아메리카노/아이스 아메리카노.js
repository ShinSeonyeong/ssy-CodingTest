// 1번 방법
function solution(money) {
    var drink = parseInt(money / 5500);
    var change = money % 5500;
    
    answer = [parseInt(drink), change];
    return answer;
}


// 2번 방법 (while문 이용)
function solution(money) {
    var answer = []; // answer[count, 남은돈]
    var price = 5500; // 한 잔의 가격
    var count = 0; // 주문한 잔의 수
    while (true) {
        if (money < price * count) {
            answer[0] = count - 1;
            answer[1] = money - (price * (count - 1));
            console.log(`count ${count}`);
            console.log(`price ${price}`);
            break;
        }
        count++;
        console.log(`price*count ${price * count}`);
    }
    return answer;
}
