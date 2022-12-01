let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n');
let count = 0;

const T = Number(input[count++]);

for(let i=0; i<T; i++){
    const PS = Array.from(input[count++]);
    let array = [];
    let valid = true;
    for(let j=0; j<PS.length; j++){
        if(PS[j] === '('){
            array.push(PS[j]);

        }else{ // ')'인 경우
            if(array.length === 0){
                console.log("NO")
                valid = false;
                break
            }
            array.pop();
        }
    }
    if(valid){
        if(array.length > 0){
            console.log("NO");
        }else{
            console.log("YES");
        }
    }
}