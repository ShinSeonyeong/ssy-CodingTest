function solution(rsp) {
    let splictStr = [...rsp];
    var answer = "";
    // console.log(splictStr);

    for (let i = 0; i < rsp.length; i++) {
        // console.log(splictStr[i]);
        if (rsp[i] == 2){
            answer += "0";
        }
        if(rsp[i] == 0){
            answer += "5";
        }
        if(rsp[i] == 5){
            answer += "2";
        }
    }
    // console.log(answer);
    return answer;
}