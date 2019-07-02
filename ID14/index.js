function solution(n){
    function collatz(x=13){
        let c = 1;
        while(x>1){
            x = x%2 ? 3*x+1 : x/2;
            c++;
        }
        return c;
    }
    let max = 0;
    let startNo = 0;
    for(let i=1; i<n; i+=2){
        let c = collatz(i);
        if(max<c){
            max = c;
            startNo = i;
        }
    }
    return [startNo,max];
}

console.time("start");
    console.log(solution(1000000));
console.timeEnd("start");