let isPrime = (n)=>{
    if(n < 2) return false;
    if(n < 4) return true;

    let s = n % 6;
    if(s !== 1 && s !== 5){
        return false;
    }

    let q = Math.floor(Math.sqrt(n));
    for(let i=4; i<=q; i++){
        if(n%i === 0) return false; 
    }

    return true;
}

function solution(n){
    let ret = [];

    for(let i=2; ret.length!==n; i++){
        if(isPrime(i)) ret.push(i);
    }

    console.time("start");
    console.log(ret[ret.length-1])
    console.timeEnd("start");
}

solution(10001);