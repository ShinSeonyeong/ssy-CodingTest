function solution(numbers) {
  var answer = 0;
  var answer2 = [];

    //역순인 경우도 포함
    // [0]*[1]
    // [1]*[0]
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !==j) {
        answer = numbers[i] * numbers[j];
        // if (Math.sign(answer) === 1) {
          // answer2 = Number(answer.toString().split().sort((a,b)=>a-b).join(''));
          answer2.push(answer);
        // console.log(answer);
        // }
      }
    }
  }
  console.log(answer2.sort((a, b) => b - a));
  console.log(answer2[0]);
  // reduce((a,b)=>a+b);
  // default로 a값은 = [0]번째;
  
  console.log(answer2);
  return answer2.reduce((a, b) => Math.max(a, b),-100000000);
}
