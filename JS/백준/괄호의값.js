let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input = Array.from(input[0]);
let array = [];
let check = true;
for(let char of input){
    valid = true;
    let idx = 0;
    let pointer = array.length-1;
    let total = 0;
    let check2 = true;
    if(char === "("){
        array.push(char);
        continue
    }
    if(char === "["){
        array.push(char);
        continue
    }
    if(array.length <= 0){
        console.log(0);
        valid = false;
        check = false;
        break
    }
    if(char === ")"){
        
        while(pointer >= 0){
            if(array[pointer] === "["){
                valid = false;
                check = false;
                break
            }
            if(array[pointer] === "("){
                check2 = false;
                idx = pointer;
                total = total === 0 ? 2 : total * 2
                break
            }
            if(!isNaN(array[pointer])){
                total += array[pointer]
                pointer -= 1;
            }
        }
        
    }
    if(char === "]"){
        while(pointer >= 0){
            if(array[pointer] === "("){
                valid = false;
                check = false;
                break
            }
            if(array[pointer] === "["){
                total = total === 0 ? 3 : total * 3
                idx = pointer;
                check2 = false;
                break
            }
            if(!isNaN(array[pointer])){
                total += array[pointer]
                pointer -= 1;
            }
        }
        
    }
    if(!valid || check2 === true){
        if(check2){
            check = false;
        }
        console.log(0);
        break
    }
    array.splice(idx);
    array.push(total);
}
let answer = 0;
if(check){
    for(let ele of array){
        if(!isNaN(ele)){
            answer += ele;
        }else{
            console.log(0);
            check = false;
            break
        }
    }
}

if(check){
    console.log(answer);
}