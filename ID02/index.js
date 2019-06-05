
function solution(maxNum=100){
    let r = 2;
    let newTerm = (x1,x2)=>{
        if(x1+x2 <= maxNum){
            if((x1+x2) % 2 === 0) r += x1+x2;
            newTerm(x2,x1+x2);
        }else{
            return console.log(r);
        }
    }
    newTerm(1,2);
}
solution(4000000);