function solution(){
    let pow = (base,exponent)=>{
        let square = (n)=>{
            let str = String(n);
            let s = str.match(/.{1,13}/gi);
            let p = '';
            for(let i=s.length-1; i>=0; i--){
                let ol = String(s[i]).length;
                let r = Number(s[i])===0 ? s[i] : String(s[i] * 2);
                if(p.length>0){
                    r = String(Number(r) + Number(p));
                }
                if(r.length>ol){
                    p = r.slice(0, r.length-ol);
                    r = r.slice(r.length-ol);
                }else{
                    p = '';
                    r = r.padStart(ol,'0');
                }
                s[i] = r;
            }
            return p + s.join('');
        }
        let v = square(String(base));
        for(let i=2; i<exponent; i++){
            v = square(v);
        }
        return v;
    }

    let vv = pow(2,1000);
    return vv.split('').reduce((a,c)=>Number(a)+Number(c));
}

console.time("start");
    console.log(solution());
console.timeEnd("start");

