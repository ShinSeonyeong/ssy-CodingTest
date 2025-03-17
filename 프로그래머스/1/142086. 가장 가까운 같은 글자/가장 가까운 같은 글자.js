function solution(str) {
    var answer = [];
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        let index = 0;
        console.log(element);
        while (true) {
            const findIndex = str.indexOf(element, index);
            if (findIndex == i) {
                if (index == 0)
                    answer.push(-1);
                break;
            } else {
                answer[i] = i - findIndex;
            }
            index++;
        }
    }
    return answer;
}