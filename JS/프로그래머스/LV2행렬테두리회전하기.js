

const target_numbers = (graph, x1, y1, x2, y2) => {    // 테두리 회전하는 요소들 배열에 담아서 return
    let target = [];
    
    for(let k=x1-1; k<x2; k++){
        target.push(graph[y1-1][k]);
    }

    for(let k=y1; k<y2-1; k++){
        target.push(graph[k][x2-1]);
    }

    for(let k=x2-1; k>=x1-1; k--){
        target.push(graph[y2-1][k]);
    }

    for(let k=y2-2; k>=y1; k--){
        target.push(graph[k][x1-1]);
    }

    return target;
}

const solution = (columns, rows, queries) => {
    
    var answer = [];

    let graph = Array.from({length:columns}, (_, idx) => Array(rows).fill(0));
    
    let count = 1;

    for(let i=0; i<columns; i++){   // 그래프에 연속된 숫자 넣어주기 
        for(let k=0; k<rows; k++){
            graph[i][k] = count++;
            if(graph[i][k] === 0){
                console.log(i, k);
            }
        }
    }

    
    for(let i=0; i<queries.length; i++){    // 회전 목록 for문 순회
        let [y1, x1, y2, x2] = queries[i];  // y1, x1, y2, x2 변수 설정
        let target_square = target_numbers(graph, x1, y1, x2, y2);  // target_numbers 함수 실행하여 테두리 회전하는 요소들 배열에 담아서 return
        answer.push(Math.min(...target_square));        // 문제 조건에따라 회전하는 요소 중 가장 최솟값을 answer에 담아야한다.
        
        target_square.unshift(target_square.pop());     // 회전로직 : pop하고 unshift 가장 마지막 요소가 맨 앞으로 이동하며 회전
        
        // 회전한 모습 그래프에 값 적용
        let pointer = 0;
        for(let k=x1-1; k<x2; k++){
            graph[y1-1][k] = target_square[pointer++];
        }
    
        for(let k=y1; k<y2-1; k++){
            graph[k][x2-1] = target_square[pointer++];
        }
    
        for(let k=x2-1; k>=x1-1; k--){
            graph[y2-1][k] = target_square[pointer++];
        }
    
        for(let k=y2-2; k>=y1; k--){
            graph[k][x1-1] = target_square[pointer++];
        }
    }

    return answer;
}

solution(100, 97 , [[1,1,100,97]]);
