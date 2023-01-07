let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n');
let count = 0;

let graph = [];
let order = [];
let visit = Array.from({length:5}, () => Array(5).fill(false));
let bingo_visited_col = [false, false, false, false, false];
let bingo_visited_row = [false, false, false, false, false];
let bingo_visited_cross = [false, false];

for(let i=0; i<5; i++){
    graph.push(input[count++].split(' ').map(Number));
}

for(let i=0; i<5; i++){
    order.push(input[count++].split(' ').map(Number));
}
let answer = 0;
const check_bingo = (x, y) => {
    
    let column = true;
    let row = true;
    let cross_1 = true;
    let cross_2 = true;
    
    // 세로줄 확인
    if(bingo_visited_col[x] === false){
        for(let i=0; i<5; i++){
            if(visit[i][x] === false){
                column = false
                break
            }
        }

        if(column === true){
            bingo_visited_col[x] = true
            answer += 1;
        }
    }

    if(bingo_visited_row[y] === false){
        for(let i=0; i<5; i++){
            if(visit[y][i] === false){
                row = false
                break
            }
        }
        if(row === true){
            bingo_visited_row[y] = true
            answer += 1;
        }
    }

    if(bingo_visited_cross[0] === false){
        for(let i=0; i<5; i++){
            if(visit[i][i] === false){
                cross_1 = false;
                break
            }
        }
        if(cross_1 === true){
            bingo_visited_cross[0] = true
            answer += 1;
        }
    }


    if(bingo_visited_cross[1] === false){
        for(let i=0; i<5; i++){
            if(visit[i][4-i] === false){
                cross_2 = false;
                break
            }
        }

        if(cross_2 === true){
            bingo_visited_cross[1] = true
            answer += 1;
        }
    }
}

let count_answer = 0;
const check_num = (num) => {
    for(let i=0; i<5; i++){
        for(let j=0; j<5; j++){
            if(graph[i][j] === num){
                visit[i][j] = true;
                check_bingo(j, i)
                if(answer >= 3){
                    return count_answer;
                }
                } 
            }
        }
    }

let flag = true;

for(let i=0; i<5; i++){
    if(flag === false) break;
    for(let j=0; j<5; j++){
        count_answer += 1;
        check_num(order[i][j]);
        if(answer >= 3){ 
            flag = false;
            break;}
    }
}

console.log(count_answer);
// console.log(order);
// 5 10 7 16 2
// 4 22 8 17 13
// 3 18 1 6 25
// 12 19 23 14 21
// 11 24 9 20 15
