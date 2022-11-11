// let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n');

let graph = [
    [],
    [2, 3],
    [3, 4, 5],
    [5],
    [],
    []
]
let queue = []
let answer = []
let N = graph.length
let indegree = new Array(N+1).fill(0)
for(let i=1; i<N; i++){
    for(let j=0; j<graph[i].length; j++){
        indegree[graph[i][j]] += 1;
    }
}

for(let i=1; i<N; i++){
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