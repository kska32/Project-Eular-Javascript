function solution(){
    let ret = null;

    let getLargestP = ()=>{
        let isPalindrome = (num)=>{
            let o = num;
            let n = parseInt(String(num).split("").reverse().join(""));
            return o===n;
        }

        let palindromes = [];
        for(let i=999; i>=100; i--){
            for(let ii=999; ii>=100; ii--){
                if(isPalindrome(i*ii)){
                    palindromes.push(i*ii);
                }
            }
        }
        return Math.max(...palindromes);
    }

    console.time("Lasted");
        ret = getLargestP();
    console.timeEnd("Lasted");

    console.log("Answer:",ret);
     
}

solution();