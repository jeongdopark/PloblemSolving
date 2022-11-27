let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n');
let count = 0;

const M = Number(input[count++]);
let ball_position = [false, true, false, false];

for(let i=0; i<M; i++){
    let [X, Y] = input[count++].split(' ').map(Number);
    [ball_position[X], ball_position[Y]] = [ball_position[Y], ball_position[X]];
}

console.log(ball_position.indexOf(true));