function solution(x){
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
    let ret = 0;
    for(let i=1; i<x; i++){
        if(isPrime(i)) ret += i;
    }
    return ret;
}

console.time("start");
    console.log(solution(2000000));
console.timeEnd("start");