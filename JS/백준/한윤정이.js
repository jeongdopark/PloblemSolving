let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n');
let count = 0;
let answer = 0;
let [ N, M ] = input[count++].split(' ').map(Number);
let combination_array = Array.from({length:N+1}, () => new Array(N+1).fill(0));


for(let i=0; i<M; i++){
    let [ A, B ] = input[count++].split(' ').map(Number);
    combination_array[A][B] = 1
    combination_array[B][A] = 1
}

for(let i=1; i<=N-2; i++){
    for(let k=i+1; k<=N-1; k++){
        if(combination_array[i][k] === 1){
            continue
        }
        for(let j=k+1; j<=N; j++){
            if(combination_array[i][j] === 1 || combination_array[k][j] === 1){
                continue
            }else{
                answer += 1
                console.log(i, k, j);
            }
        }
    }
}

console.log(answer);