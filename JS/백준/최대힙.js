let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;
const N = Number(input[count++]);


class Heap {
    constructor(){
        this.heap = [];
    }

    add_value(value){
        const heap = this.heap;
        heap.push(value);
        let index = heap.length-1;
        let parent = Math.floor((index-1) /2); // 부모 노드
        while(index > 0 && heap[parent] < heap[index]){
            [heap[parent], heap[index]] = [heap[index], heap[parent]];
            index = parent;
            parent = Math.floor((index-1) /2);
        }
    }

    remove(){
        const heap = this.heap;
        if(heap.length <= 1){
            return heap.pop();
        } 

        const pirioirty_value = heap[0];
        heap[0] = heap.pop();

        let crnt = 0;
        let valid = true;
        while(true){
            if(count === 10){
                valid = false;
            }
            let left_node = crnt * 2 + 1;   
            let right_node = crnt * 2 + 2;
            if(left_node >= heap.length){
                break
            }
            let next = crnt;

            if(heap[next] < heap[left_node]){
                next = left_node
            }

            if(right_node < heap.length && heap[next] < heap[right_node]){
                next = right_node
            }
            if(next === crnt){
                break
            }

            [heap[crnt], heap[next]] = [heap[next], heap[crnt]];
            crnt = next;
        }
        return pirioirty_value;
    }
}

let test = new Heap();
let answer = [];
for(let i=0; i<N; i++){
    const x = Number(input[count++]);
    // x가 0이면 배열에서 가장 큰 값을 출력하고 그 값을 배열에서 제거
    // x가 자연수라면 배열에 x를 추가
    // console.log(test.heap);
    if(x !== 0){
        test.add_value(x);
    }
    if(x === 0){
        if(test.heap.length === 0) answer.push(0);
        else answer.push(test.remove());
    }
}

console.log(answer.join('\n'));