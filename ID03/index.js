function solution(n){
    let maxPrime = (S,D=2)=>{
        if( D*D <= S ){
            S%D === 0 ? S/=D : ++D;
            return maxPrime(S,D);
        }else{
            return S;
        }
    }
    console.time("Lasted");
    let ret = maxPrime(n,2);
    console.timeEnd("Lasted",ret);
    console.log("Return:",ret);
}

solution(600851475143);