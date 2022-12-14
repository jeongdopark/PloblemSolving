// let input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n');
// let array = Array.from(input[0]);
// let answer = [];
// let pair = [];
// let test = [];
// for(let i=0; i<array.length; i++){
//     if(array[i] === "("){
//         test.push(i);
//     }else if(array[i] === ")"){
//         pair.push([test.pop(), i]);
//     }
// }

// let max_ = pair.length;

// const recursion = (crnt_list, start) => {

//     for(let i=start; i<max_; i++){
//         crnt_list.push(pair[i]);
//         recursion(crnt_list, i+1);
//         crnt_list.pop();
//     }

//     if( crnt_list.length > 0 && crnt_list.length <= max_ ){
//         console.log(crnt_list);
//         let test_array = array.slice();     // 그냥 test_array = array라고 할 경우 얕은 복사가되어 서로 영향을 미침 slice에 대해서 공부 필요
//         let index = [];
//         crnt_list.map((e) => {
//             index = [...index, ...e];
//         })
//         // splice를 통해 제거하게되면 앞의 인덱스부터 지울 경우 
//         // 뒤에 인덱스는 변화하게 된다.
//         // 고로 내림차순으로 정렬한뒤에 뒤의 인덱스부터 splice해주면 index변화가 없이 진행가능
//         index.sort((a, b) => b-a).map((e) => {  
//             console.log(index);
//             test_array.splice(e, 1);
//         })
//         answer.push(test_array.join(''));
//         return
//     }
// }
// recursion([], 0)
// // set을 해주기 전에는 틀렸는데, 문제에서 중복되지 않는 수식이라는 조건이 있다. '중복' 조건이 존재하면 항상 Set 고려하기.
// answer = Array.from(new Set(answer));
// console.log(answer.sort().join('\n'));


const fs = require('fs');
let stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : `((0))`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const expression = Array.from(input());
const stack = [];
const brackets = [];
const result = new Set();
for (let i = 0; i < expression.length; i++) {
  if (expression[i] === '(') {
    stack.push(i);
  }
  if (expression[i] === ')') {
    brackets.push([stack.pop(), i]); // [[여는 괄호의 인덱스, 닫는 괄호인덱스]]
  }
}


const DFS = (expressionArr, depth) => {
  if (depth === brackets.length) {
    let expressionWithoutBracket = expressionArr.join(''); 
    if (expression.join('') === expressionWithoutBracket) return; 
    if (!result.has(expressionWithoutBracket)) {
      result.add(expressionWithoutBracket);
    }
    return;
  }
  console.log(expressionArr, depth,0);
  DFS(expressionArr, depth + 1);
  console.log(expressionArr,depth ,1);
  expressionArr = [...expressionArr];
  expressionArr[brackets[depth][0]] = ''; // 괄호를 없애는 작업
  expressionArr[brackets[depth][1]] = '';
  console.log(expressionArr, depth,2);
  DFS(expressionArr, depth + 1);
};

DFS(expression, 0);
console.log([...result].sort().join('\n'));