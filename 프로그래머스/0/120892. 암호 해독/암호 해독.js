function solution(cipher, code) {
    var answer = '';
    for (let i = 0; i < cipher.length; i++) {
        // console.log(`i  ${i}`);
        if ((i+1) % code === 0) {
            answer += cipher[i];
            // console.log(`(i+1) % code ${(i+1) % code}`);
            // console.log(`cipher[i] ${cipher[i]}`);
        }
    }
    return answer
}