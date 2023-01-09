let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n');
let count = 0;

let A = input[count++];
let B = input[count++];
let answer = 0;
let dp = Array.from({length:B.length+1}, () => Array(A.length+1).fill(0));

for(let i=1; i<=B.length; i++){
    for(let j=1; j<=A.length; j++){
        if(B[i-1] === A[j-1]){
            dp[i][j] = dp[i-1][j-1] + 1;
        }else{
            dp[i][j] = 0;
        }
    }
}

for(let i=1; i<=B.length; i++){
    for(let j=1; j<=A.length; j++){
        answer = Math.max(dp[i][j], answer);
    }
}

console.log(answer);