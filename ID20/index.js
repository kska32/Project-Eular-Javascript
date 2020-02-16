math.config({
  number: 'BigNumber',
  precision: 1000   
})

function solution(){
    let fac1 = (n)=>{
        let ret; 
        if( math.subtract(n,1) > 0){
            ret = math.multiply(n, fac1(math.subtract(n, 1) ) );
        }else{
            ret = math.bignumber(n);
        }  
        return math.bignumber(ret); //123
    }


        let start = window.performance.now();
        
        let y = 0;
        let ay = fac1(100).d;
        ay.forEach((v)=>{
            [...v.toString()].forEach((x)=>{
                y += Number(x);
            })
        });
        console.log('result:',y);
        
        let end = window.performance.now();
        let time = end - start;
        document.body.innerHTML = `The answer is ${y}, elapsed ${time}ms.`;
}

solution();