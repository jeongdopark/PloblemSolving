// let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n');
let count = 0;

let [N, M] = input[count++].split(' ').map(Number)
let indegree = new Array(N+1).fill(0)
let graph = Array.from(Array(N+1), () => new Array())
let queue = []
let answer = []

for(let i=0; i<M; i++){
    let [A, B] = input[count++].split(' ').map(Number);
    graph[A].push(B)
}
for(let i=1; i<N+1; i++){
    for(let j=0; j<graph[i].length; j++){
        indegree[graph[i][j]] += 1;
    }
}

for(let i=1; i<N+1; i++){
    if(indegree[i] === 0){
        queue.push(i)
    }
}

while(queue.length > 0){
    current_node = queue.shift();
    answer.push(current_node);
    for(let i=0; i<graph[current_node].length; i++){
        indegree[graph[current_node][i]] -= 1;
        if(indegree[graph[current_node][i]] === 0){
            queue.push(graph[current_node][i]);
        }
    }
}

console.log(answer.join(' '));