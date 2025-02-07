function solution(strlist) {
    var answer = [];
    for(var i=0; i<strlist.length; i++){
        console.log(strlist[i]);
        answer.push(strlist[i].length);
    }
    return answer;
}