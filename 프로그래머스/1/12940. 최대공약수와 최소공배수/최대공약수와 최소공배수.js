function solution(n, m) {
    var max_num = 1;
    while (true) {
        if (max_num % n === 0 && max_num % m === 0) {
            break;
        }
        max_num++;
    }

    for (var i = 0; i <= max_num; i++) {
        if (n % i == 0 && m % i == 0) {
            min_num = i;
        }
    }
    return [min_num, max_num];
}