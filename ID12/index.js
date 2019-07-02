function solution(x){
    let nThTriNum = (n)=>{
        let s = 0;
        for(let i=1; i<=n; i++){
            s += i;
        }
        return s;
    }
    let devisorCount = (n)=>{
        let maxPrimeFac = (S,D=2)=>{
            if( D*D <= S ){
                S%D === 0 ? S/=D : ++D;
                return maxPrimeFac(S,D);
            }else{
                return S;
            }
        }
        let r = {};
        while(n!==1){
            let mp = maxPrimeFac(n);
            if(n % mp === 0){
                n /= mp;
                r[mp] ? r[mp]++ : r[mp]=2;
            }else{
                break;
            }
        }
        return Object.values(r).reduce((a,c)=>a*c);
    }
    for(let i=2; true; i++){
        let nthTri = nThTriNum(i);
        let dc = devisorCount(nthTri);
        if(dc>=x) return [nthTri,i];    
    }
}

console.time("start");
    console.log(solution(500));
console.timeEnd("start");