function solution(myString, pat) {
    var sStr = myString.toLowerCase();
    var spat = pat.toLowerCase();
    var answer = sStr.search(spat);

    if(myString.length < pat.length) return 0;
    else if (answer === -1) return 0;
    else return 1;
}