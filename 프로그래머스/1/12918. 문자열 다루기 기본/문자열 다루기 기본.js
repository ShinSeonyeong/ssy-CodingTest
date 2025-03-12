function solution(s) {
    const re = /^[0-9]+$/;
    return re.test(s) && (s.length == 4 || s.length == 6);
}