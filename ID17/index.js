function solution(){
    function converter(n){
        n = String(n);
        let c = {
            1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',
            7:'seven', 8:'eight', 9:'nine', 10:'ten',11:'eleven',12:'twelve',
            13:'thirteen',14:'fourteen',15:'fifteen',16:'sixteen',17:'seventeen',
            18:'eighteen', 19:'nineteen', 20:'twenty', 30:'thirty', 40:'forty',
            50:'fifty',60:'sixty', 70:'seventy',80:'eighty',90:'ninety',
        }
        switch(n.length){
            case 1:
                return c[n];
            case 2:
                return c[n] ? c[n] : c[n[0]+'0'] + c[n[1]];
            case 3:
                return c[n[0]] + 'hundred' + (Number(n[1]+n[2])>0 ? ('and'+ (Number(n[1])===0 ? converter(n[2]) : converter(n[1]+n[2]))) : '');
            case 4:
                return 'onethousand'
        }
    }

    let ret = '';
    for(let i=1; i<=1000; i++){
        ret+=converter(i);
    }
    return ret.length;
}

console.time("start");
    console.log(solution());
console.timeEnd("start");