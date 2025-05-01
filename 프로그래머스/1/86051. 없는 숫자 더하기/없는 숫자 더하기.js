
function solution(numbers) {
  let answer = 0;
  let res = 0;
  for (let j = 0; j < 10; j++) {
    res = res + j;
  }
//   console.log(res);

  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
    // console.log(answer);
  }
  return (res - answer);
}