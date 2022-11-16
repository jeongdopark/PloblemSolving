let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n');
let count = 0

let N = Number(input[count++]);

let gcd = (a, b) => {
    if(a%b !== 0){
        return gcd(b, a%b)
    }
    return b
}

for(let i=0; i<N; i++){
    let numbers = input[count++].split(' ').map(Number);
    let n = numbers.shift()
    let total = 0;
    numbers.sort(function(a, b){
        return b - a;
    });
    
    let recursion = (crnt_list, start, n, numbers) => {
        if(crnt_list.length === 2){

            gcd_ans = gcd(crnt_list[0], crnt_list[1])   
            total += gcd_ans
            return
        }
    
        for(let i=start; i<=n; i++){
            crnt_list.push(numbers[i])
            recursion(crnt_list, i+1, n, numbers)
            crnt_list.pop()
        }
    }
    recursion([], 0, n-1, numbers);
    console.log(total);
}



