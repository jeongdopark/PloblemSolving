
const solution = (priorities, location) => {
    let stack = Array.from({length:priorities.length}, (_, i) => i)
    let answer = 1;
    while(true){

        let max_num = Math.max.apply(null, priorities);
        if(priorities[0] === max_num){
            
            if(stack[0] === location){
                return answer
            }else{
                priorities.shift();
                stack.shift()
                answer += 1;
            }
        }else{
            priorities.push(priorities.shift())
            stack.push(stack.shift())
        }
    }
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));