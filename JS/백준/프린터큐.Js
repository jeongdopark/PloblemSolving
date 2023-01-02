let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n');
let count = 0;

let T_C = Number(input[count++]);   // 테스트 케이스 입력값

for(let i=0; i<T_C; i++){   //  테스트케이스만큼 for
    let [N, M] = input[count++].split(' ').map(Number); // 입력값 N과 M
    let important = input[count++].split(' ').map(Number); // 중요도 입력값 배열 
    let order = Array.from({length:N}, (_, i) => i);        // 순서 배열
    let counting = 0;
    while(true){
        let max_num = Math.max.apply(null, important); // 중요도 최댓값
        if(important[0] === max_num){   // 중요도 최댓값이랑 문서 가장 앞에 있는 중요도와 일치할 경우
            if(order[0] === M){    
                counting += 1;     // 찾고자하는 문서일 경우
                break
            }else{  // 찾고자하는 문서가 아닐 경우
                important.shift();
                order.shift();
                counting += 1;
            }
        }else{  // 맨 앞 문서가 최댓값이 아닐 경우
            important.push(important.shift());
            order.push(order.shift());
        }
    }
    console.log(counting);
}
