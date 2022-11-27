let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n');
let count = 0;

// 모든 사진틀 비어있다.
// 추천하면 추천 받은 학생의 사진은 반드시 사진틀에 게시
// 비어있는 사진틀이 없는 경우, 추천 횟수 가장 적은 사진 삭제 그 자리에 추천받은 학생의 사진 게시
// 추천 횟수가 가장 적은 학생이 여럿일 경우, 가장 오래된 사진 삭제
// 현재 사진이 게시된 학생이 추천 받은 경우 횟수만 증가
// 삭제되면 추천 횟수 0으로 초기화

const N = Number(input[count++]);
const total = Number(input[count++]);
const student = input[count++].split(' ').map(Number);

let photo = [];

for(let i=0; i<total; i++){
    const number = student[i];
    if(photo.length < N){
        let valid = false;
        photo.map((e) => {
            if(e[0] === number){
                e[1] += 1;
                valid = true
            }
        })
        if(!valid){
            photo.push([number, 1]);
        }
    }    
    
    else{
        let min_number = Infinity;
        let min_idx = 0;
        let jump = true;
    
        
        for(let k=0; k<photo.length; k++){
            if(photo[k][0] === number){
                photo[k][1] += 1;
                jump = false;
            }
        }
        if(jump){
            for(let j=0; j<photo.length; j++){
                if(photo[j][1] < min_number){
                    min_idx = j;
                    min_number = photo[j][1]
                }
            }
            photo.splice(min_idx,1)
            photo.push([student[i], 1])
        }
    }
}

console.log(photo.sort((a, b) => a[0] - b[0]).map((e) => e[0]).join(' '));
