let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n');
let count = 0;

const [N, M] = input[count++].split(' ').map(Number);
let array = [];
let dict = {};
for(let i=0; i<N; i++){  // 주어진 입력값을 배열에 담는다
    const name = input[count++]
    array.push(name);   // 
    dict[name] = i+1;
}
console.log(dict);
// M개의 문제 for문
for(let i=0; i<M; i++){
    let crnt_input = input[count++];
    let problem = !isNaN(crnt_input) ? Number(crnt_input) : crnt_input; // 문제가 숫자일 경우 Number변환
    
    if(isNaN(problem)){    // 문제가 문자일 경우
        console.log(dict[problem]);
    }else{  // 문제가 숫자일 경우
        console.log(array[problem-1]);
    }
}