function solution(my_string) {
  var regex = /[^0-9]/g;
  var answer = my_string.replace(regex, "");
  var result = 0;

  for (let i = 0; i < answer.length; i++) {
    result += Number(answer[i]);
  }
  return result;
}