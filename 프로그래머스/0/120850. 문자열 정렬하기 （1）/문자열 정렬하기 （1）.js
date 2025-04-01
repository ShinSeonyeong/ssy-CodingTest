function solution(my_string) {
    var regex = /[^0-9]/g;
    var answer = my_string.replace(regex, "");

    var result = [...answer].sort((a, b) => a.localeCompare(b));
    // console.log(result);
    var result2 = result.map(Number);
    // console.log(result2);
    return result2;
}