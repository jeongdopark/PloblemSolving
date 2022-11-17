
let count = 0
let answer = []
let valid = true;
const recursion = (crnt_list, n, k) => {
    if(valid){
        if(crnt_list.length === n){
            count += 1
            if(count === k){
                answer = [...crnt_list]
                valid = false
            }
            return
        }
    
        for(let i=1; i<=n; i++){
            if(valid){
                if(!crnt_list.includes(i)){
                    crnt_list.push(i)
                    recursion(crnt_list, n, k)
                    crnt_list.pop()
                }
            }
            else{
                return
            }
        }
    }else{
        return
    }
}


const solution = (n, k) => {
    recursion([], n, k)
    return answer
}

console.log(solution(3, 5));