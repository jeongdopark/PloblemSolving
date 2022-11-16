const gcd = (a, b) => {
    let r;
    while( b != 0){
        r = a%b;
        a = b
        b = r
    }
    return a
}

const gcd_recursion = (a, b) => {
    if(a%b !== 0){
        return gcd_recursion(b, a%b)
    }
    return b
}

console.log(gcd_recursion(68, 12));