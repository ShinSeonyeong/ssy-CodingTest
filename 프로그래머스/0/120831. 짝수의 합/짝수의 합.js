function solution(n) {
    var total = 0;
    
    for( var i = 0; i <= n; i = i + 2){
    console.log(i);
    total = total + i;
    }

    return total;
}