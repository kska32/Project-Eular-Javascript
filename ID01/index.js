

function solution(v){
    let ret = 0;
    for(let i=1; i<v;i++){
        if(i%3 === 0){
            ret += i;
        }else if(i%5 === 0){
            ret += i;
        }
    }
    console.log(ret);
}
solution(1000);