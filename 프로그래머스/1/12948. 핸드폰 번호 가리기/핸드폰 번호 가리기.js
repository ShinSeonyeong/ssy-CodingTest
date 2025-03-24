function solution(phone_number) {
    const fs = phone_number.slice(0, -4);
    const answer = new Array(fs.length).fill('*').join("");

    return answer + phone_number.slice(-4);
}