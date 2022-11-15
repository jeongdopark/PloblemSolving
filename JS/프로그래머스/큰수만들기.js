
// const solution = (number, k) => {
//     init_k = k
//     pointer = 0;
//     stack = [];
//     count = 0
//     while(k>0 && pointer < number.length){
//         if(stack.length == 0){
//             stack.push(Number(number[pointer]))
//             pointer += 1
//         }else{
//             while(k>0 && stack.length != 0){
//                 if(stack[stack.length-1] < Number(number[pointer])){
//                     stack.pop()
//                     k -= 1
//                 }else{
//                     break
//                 }
//             }
//             stack.push(Number(number[pointer]))
//             pointer += 1
//         }
//     }
//     last = stack.length 
//     while(last < number.length - init_k){
//         stack.push(Number(number[pointer]))
//         pointer += 1
//         last += 1
//     }
//     while(last > number.length - init_k){
//         stack.pop()
//         last -= 1
//     }
//     return stack.join('')
// }


// console.log(solution(number="4321", k=1));


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