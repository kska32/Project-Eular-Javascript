

function solution(){
    let result = [];
    for(let i=2; i<=20; i++){
        result.push(...factorize(i));
    }

    let res = {};
    for(let i=0;i<result.length;i++){
        if(res[result[i][0]]){
            for(let ii=i+1; ii<result.length; ii++){
                if( result[i][0] === result[ii][0]){
                    if( res[result[i][0]] < result[ii][1]){
                        res[result[i][0]] = result[ii][1];
                    }
                }
            }
        }else{
            res[result[i][0]] = result[i][1];
        }
    }

    let ok = 1;
    Object.keys(res).forEach((v)=>{
       ok *= Math.pow(v,res[v]);
    });

    console.log("Return:", ok);

    function factorize(s){
        let maxPrime = (S,D=2)=>{
            if( D*D <= S ){
                S%D === 0 ? S/=D : ++D;
                return maxPrime(S,D);
            }else{
                return S;
            }
        }
        
        let rs = [];
        let maxPrimeCount = (n)=>{
            let nc = n;
            let m = maxPrime(n);
            let c = 0;
            while(n%m===0){
                n /= m;
                c++;
            }
            let pv =  Math.pow(m,c);
            rs.push([m,c,pv]);
      
            if(nc%pv===0 && nc/pv!==1){
                maxPrimeCount(nc/pv);
            }
        }
        maxPrimeCount(s);
        return rs;
    }
}


//console.time("Lasted");
//solution();
//console.timeEnd("Lasted");


console.time('execution');
function gcd(x, y) {
    if (y == 0) {
        return x;
    }
    return gcd(y, x % y);
}

function lcm(x, y) {
    return x * y / gcd(x, y);
}

function getLcmTo(n) {
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result = lcm(result, i);
    }
    return result;
}

console.log(getLcmTo(20));
console.timeEnd('execution');




