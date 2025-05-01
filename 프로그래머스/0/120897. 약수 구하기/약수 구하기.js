function solution(n) {
  let answer;
  let result = [];
  for (let i = 0; i <= n; i++) {
    answer = n % i;
    // console.log(`n = ${n}, i=${i}, answer = ${answer}`);
    if (answer == 0) {
      console.log(i);
      result.push(i);
      console.log(result);
    }
  }
  return result;
}