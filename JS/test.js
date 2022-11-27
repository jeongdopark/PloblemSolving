


// n명의 참가자, a참가자, b참가자 => a참가자와 b참가자가 몇 번째 라운드에서 만나는지 구하라

const solution = (n, a, b) => {
    let round = 0;
    if(a>b){
        let temp_a = a;
        a = b;
        b = temp_a
    }
    while(true){
        round += 1;
        let next_a = a%2 === 1 ? parseInt(a/2)+1 : parseInt(a/2); // 다음 a
        let next_b = b%2 === 1 ? parseInt(b/2)+1 : parseInt(b/2); // 다음 b

        if(b%2 !== 0) {
            a = next_a;
            b = next_b;
            continue
        }
        if(b - a === 1){
            return round
        }
        // if(next_b - next_a === 1){
        //     return round+1
        // }
        a = next_a;
        b = next_b;
    } 
}

console.log(solution(8, 5, 4));