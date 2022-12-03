let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n');
const array = Array.from(input[0]);


let count = 0;

const recur = (total, crnt_el, crnt_list) => {
    if(crnt_el === "("){
        recur(1, "(",)
    }

}

while(count < array.length){
    if(array[count] === "(" || array[count] === "["){

    }       
}