//javascript in node, I7-4710HQ
//takes 4.249ms
function solution(){
    let isLeapYear = (x)=>x % 100 === 0 ? x % 400 === 0 : x % 4 ===0;
    let m = (nthYear)=>{
        let isLeap = isLeapYear(nthYear);
        return {  
            0:31, 1:isLeap?29:28, 2:31, 3:30, 4:31, 5:30, 
            6:31, 7:31, 8:30, 9:31, 10:30, 11:31, len:isLeap?366:365
        };
    };
    
    let sundayCounts = 0;
    let nthDays = 1 + 1 ; //1901.01.01 is Tuesday.
    for(let i=1901; i<=2000; i++){
        let r = m(i);
        for(let h=0; h<12; h++){
            nthDays += r[h];
            if(nthDays%7===0) sundayCounts++;
        }
    }
    return sundayCounts;
}

console.time("start");
    console.log(solution());
console.timeEnd("start");