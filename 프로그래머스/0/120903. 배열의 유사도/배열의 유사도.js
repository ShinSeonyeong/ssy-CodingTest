var count = 0;
function solution(s1, s2) {
    for(var i = 0; i < s1.length; i++){
        // console.log(`s1[i] ${s1[i]} ${i}`);
        for(var j = 0; j < s2.length; j++){
            // console.log(`s2[j] ${s2[j]} ${j}`);
            if(s1[i] === s2[j]){
                count++;
                // console.log(count);
                // console.log(`s1[i] if문 s2[j] ${s1[i]} ${s2[j]}`);
            }
        }
    }
    console.log(count);
    return count;
}

// 2번. forEach문
function solution(s1, s2) {
    // console.log(s1);
    // console.log(s2);
    var count = 0;
    
    // s1.forEach(element => {
    //     console.log(element);
    //     s2.forEach(s2_element => {
    //         console.log(s2_element);
    //         if(element === s2_element){
    //             count ++;
    //         }
    //     })
    // });

    return count;
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]));
// console.log(solution(["n", "omg"], ["m", "dot"]));
