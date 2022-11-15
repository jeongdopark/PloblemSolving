const solution = (number, k) => {
    stack = []
    for(let i=0; i<number.length; i++){
        while(k > 0 && stack.length > 0 && stack[stack.length-1] < number[i]){
            stack.pop()
            k -= 1
        }
        stack.push(number[i])
    }

    while(k > 0){
        stack.pop()
        k -= 1
    }
    return stack.join('')
}

console.log(solution("4321", 1));