

const solution = (crnt_list, N, M) => {
    if(crnt_list.length === M){
        console.log(crnt_list.join(' '));
        return
    }

    for(let i=1; i<=N; i++){
        if(!crnt_list.includes(i)){
            crnt_list.push(i)
            solution(crnt_list, N, M)
            crnt_list.pop()
        }
    }
}

solution(crnt_list, N, M)