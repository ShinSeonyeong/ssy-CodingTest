function solution(num, k) {
  var answer = (num + "").split("");
  var answer2 = k.toString();

  for (let i = 0; i <= answer.length; i++) {
    if (answer[i] == answer2) {
      return answer.indexOf(answer2) + 1;
    } 
  }
  return -1;
}