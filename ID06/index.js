function sumSquareDiff1(n){
    let r=0, rr=0;

    let ok = [];
    for(let i=1; i <= n; i++){
        rr += i;
        r += i * i;
        //if(r%rr===0) ok.push({[i]:r/rr});
    }
    //console.log(`${rr*rr} - ${r} = ${rr*rr-r}`, r/rr);
    //console.log(ok,ok.length)
    return rr*rr - r;
}

function sumSquareDiff2(n){ //The result is correct only if (n - 1) % 3 === 0
    let dd =  n*(1 + n)/2;
    let squareOfSum = dd * dd;

    let sumOfSquare = dd * (n - Math.floor(n/3))  ;
    return squareOfSum - sumOfSquare;
}

console.time("start1");
console.log(sumSquareDiff1(100));
console.timeEnd("start1");

console.log("\n   vs   \n")

console.time("start2");
console.log(sumSquareDiff2(100));
console.timeEnd("start2");
