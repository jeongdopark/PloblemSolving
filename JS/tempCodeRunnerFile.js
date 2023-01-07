let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n');
let count = 0;

const position = {
    q : [0, 0, false],
    w : [0, 1, false],
    e : [0, 2, false],
    r : [0, 3, false],
    t : [0, 4, false],
    y : [0, 5, true],
    u : [0, 6, true],
    i : [0, 7, true],
    o : [0, 8, true],
    p : [0, 9, true],
    a : [1, 0, false],
    s : [1, 1, false],
    d : [1, 2, false],
    f : [1, 3, false],
    g : [1, 4, false],
    h : [1, 5, true],
    j : [1, 6, true],
    k : [1, 7, true],
    l : [1, 8, true],
    z : [2, 0, false],
    x : [2, 1, false],
    c : [2, 2, false],
    v : [2, 3, false],
    b : [2, 4, true],
    n : [2, 5, true],
    m : [2, 6, true],
}

let [L, R] = input[count++].split(' ');
const str = input[count++].split('');

const move_time = (start_1, start_2, end) => {
    const s_1 = position[start_1];
    const s_2 = position[start_2];
    const e = position[end];
    
    if(e[2] === false){ // 자음
        L = end;
        return Math.abs(s_1[0] - e[0]) + Math.abs(s_1[1] - e[1]);
    }else{
        R = end;
        return Math.abs(s_2[0] - e[0]) + Math.abs(s_2[1] - e[1]);
    }
    
    
    
}

let answer = 0;
str.forEach((char) => {
    answer += 1;
    answer += move_time(L, R, char);
})

console.log(answer);
