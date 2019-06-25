function sumOfSquare(n){
    let r=0, rr=0;
    for(let i=1; i <= n; i++){
        rr += i;
        r += i * i;
    }
    return rr*rr - r;
}

console.log(sumOfSquare(100))