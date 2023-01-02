let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim()


let total = 0;
let flag = false; // 현재 -가 없는 상태
let crnt_number = '';
let minus_total = 0;    // -있는 상태에서 누적값

for(let i=0; i<input.length; i++){
    // console.log(total, crnt_number, minus_total);
   if(flag === false){
        if(input[i] === '-'){
            total += Number(crnt_number);
            crnt_number = '';
            flag = true
        }else if(input[i] === '+'){
            total += Number(crnt_number);
            crnt_number = '';
        }else{
            crnt_number += input[i];
        }
        // 숫자일 경우
        
   }else{    // - 앞에 있는 경우
    if(input[i] === '-'){
        minus_total += Number(crnt_number);
        crnt_number = '';
        total -= minus_total;
        minus_total = 0;
    }else if(input[i] === '+'){
        
        minus_total += Number(crnt_number);
        crnt_number = '';
    }else{
        // 숫자일 경우
        crnt_number += input[i];
    }
   }
}
if(flag === true){
    minus_total += Number(crnt_number);
    total -= minus_total;
}else{
    total += Number(crnt_number);
}
console.log(total);