
// 화살개수 n, 10점부터 0점까지 순서대로 담은 정수 배열 info

const solution = (n, info) => {
    
    let answer = [];
    let diff = -Infinity;
    const reucr = (depth, a_info, l_info, start) => {
        if(depth === n){
            let a_total = 0;
            let l_total = 0;
            for(let j=0; j<=10; j++){
                if(a_info[j] >= l_info[j]){
                    a_total += 10-j;
                }
                else{
                    l_total += 10-j;
                }
            }
            
            if(l_total > a_total){
                console.log(l_total, a_total);
                if(diff <= l_total - a_total){
                    answer = l_info.slice();
                    diff = l_total - a_total;
                }
            }
            
            return
        }
        for(let i=start; i<=10; i++){
            l_info[i] += 1;
            reucr(depth+1, a_info, l_info, i);
            l_info[i] -= 1;
        }
    }
    reucr(0, info, Array.from({length:11}, () => 0), 0);
    return answer;
}

console.log(solution(5, [2,1,1,1,0,0,0,0,0,0,0]));