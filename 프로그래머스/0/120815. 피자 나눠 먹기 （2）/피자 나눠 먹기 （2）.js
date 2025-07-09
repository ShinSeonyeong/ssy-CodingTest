function solution(n) {
  var answer = 0;
  var pizza = 6;

  while (pizza % n !== 0) {
    pizza += 6;
    answer++;
  }
  return answer + 1;
}