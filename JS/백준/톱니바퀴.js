let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n');
let count = 0;

// 1은 S극 0은 N극
// 방향 1인 경우 시계 방향, -1인 경우 반시계 방향

let array = [];
let rotate = [];

// 톱니바퀴 배열에 담기
for(let i=0; i<4; i++){
    array.push(Array.from(input[count++]).map(Number));
}

// 회전 정보 담기
const K = Number(input[count++]); // 회전 횟수
for(let i=0; i<K; i++){
    rotate.push(input[count++].split(' ').map(Number));
}


// 반시계 방향 회전
const left_rotate = (target_num) => {
    let last_element = array[target_num-1].shift();
    array[target_num-1].push(last_element);
}

// 시계 방향 회전
const right_rotate = (target_num) => {
    let first_element = array[target_num-1].pop();
    array[target_num-1].unshift(first_element);
}
let count_ = 0
rotate.map((e) => {
    count_ += 1;
    let [target_num, target_dir] = e; // num : 톱니바퀴 번호, dir : 회전 방향
    // 회전 방향 1 -> 시계 방향, -1 -> 반시계
    // 기준이 되는 톱니바퀴 번호에 인접해 있는 톱니바퀴를 확인한다.


    let target_valid = false;
    let left_search = target_num;
    let left_dir = target_dir;
    
    // 기준이 되는 톱니바퀴 왼쪽 확인
    let left_answer = [];
    
    while(left_search > 1){
        // 서로 극이 같으면 회전 X
        if(array[left_search-1][6] === array[left_search-2][2]){ 
            break
        // 서로 극이 다른 경우 
        }else{
                target_valid = true;
                let current_num = left_search-1;
                let current_dir = left_dir === 1 ? -1 : 1;
                left_answer.push([current_num, current_dir]);
                
                left_dir = current_dir;
                left_search -= 1;
            }
        }
    
    let right_search = target_num;
    let right_dir = target_dir
    let right_answer = [];
    while(right_search < 4){
        // 서로 극이 같으면 회전 X
        if(array[right_search-1][2] === array[right_search][6]){  
            break
        // 서로 극이 다른 경우 
        }else{
                target_valid = true;
                let current_num = right_search+1;
                let current_dir = right_dir === 1 ? -1 : 1;
                right_answer.push([current_num, current_dir]);
                right_dir = current_dir;
                right_search += 1;
            }
        }
    
    left_answer.map((e) => {
        let [num, dir] = e;
        if(dir === 1){
            right_rotate(num);
        }else{
            left_rotate(num);
        }
    })

    right_answer.map((e) => {
        let [num, dir] = e;
        if(dir === 1){
            right_rotate(num);
        }else{
            left_rotate(num);
        }
    })

    if(target_dir === 1){
        right_rotate(target_num);
    }else{
        left_rotate(target_num);
    }
    
})
let answer = 0;

if(array[0][0] === 1){
    answer += 1;
}

if(array[1][0] === 1){
    answer += 2;
}

if(array[2][0] === 1){
    answer += 4;
}

if(array[3][0] === 1){
    answer += 8;
}

console.log(answer);