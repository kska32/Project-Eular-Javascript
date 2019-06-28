
function solution(n){
    let p = (a,b,c)=>(a*a + b*b === c*c) ? true : false;
    let r = (a,b,c)=>(a + b + c === n) ? true : false; 

    for(let a=1; a<=Math.floor(n/3); a++){
        for(let b=a+1; b<=n-a; b++){
            let c = n-a-b;
            if(c<=b) break;
            if(p(a,b,c) && r(a,b,c)) return [a,b,c,a*b*c];
        }
    }
    
}

console.time("start");
console.log(solution(1000));
console.timeEnd("start");