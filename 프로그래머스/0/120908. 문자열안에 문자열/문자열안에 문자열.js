function solution(str1, str2) {
    const test = str1.indexOf(str2);
    console.log(test);
    if (test === -1) {
        return 2;
    }else{
        return 1;
    }
}