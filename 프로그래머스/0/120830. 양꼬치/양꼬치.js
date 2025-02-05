function solution(n, k) {
    var total = 0;
    var sheep = n * 12000;
    var drink = k * 2000;
    total = sheep + drink;
    total = total - (parseInt(n/10) * 2000);
    return total;
}