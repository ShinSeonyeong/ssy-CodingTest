function solution(slice, n) {
  var res = n / slice;
  res = parseInt(res);

  if (n % slice > 0) {
    res = res + 1;
  }
  return res;
}