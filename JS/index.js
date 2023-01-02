let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n');
let count = 0;

const [ N, M ] = input[count++].split(' ').map(Number);
let graph = [];

for(let i=0; i<N; i++){
    const element = Array.from(input[count++]);
    graph.push(element);
}

// 1은 이동할 수 없는 벽, 0은 이동할 수 있는 곳