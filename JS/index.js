let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n');
let count = 0;

let N = Number(input[count++]);
let array = input[count++].split(' ').map(Number);
let number = Array.from({length:N}, (_, i) => [i+1, array[i]]);
let first = number.shift()
let jump = first[1]

let counter = 0;
let answer = [];
answer.push(first[0]);

while(number.length !== 0){
    if(jump > 0){
        counter += 1;
        if(counter === jump){
            counter = 0;
            let test = number.shift()
            jump = test[1];
            answer.push(test[0]);
        }else{
            number.push(number.shift());
        }

    }else{

        counter -= 1;
        if(counter === jump){
            counter = 0;
            let test = number.pop()
            jump = test[1];
            
            answer.push(test[0]);
        }else{
            number.push(number.pop());
        }
    } 
}

console.log(answer.join(' '));