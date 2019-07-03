
function solution(){
        let fillLattice = (tx,ty)=>{
            let lat = [];
            for(let y=0; y<=ty; y++){
                lat.push([]);
                for(let x=0; x<=tx; x++){
                    if(y===0){
                        x===0 ? lat[y][0]=0 : lat[y].push(1);
                    }else{
                        x===0 ? lat[y][0]=1 : lat[y].push(lat[y-1][x]+lat[y][x-1]);
                    }
                }
            }
            return lat[ty][tx];
        }
        console.time("start");
            console.log(fillLattice(20,20));
        console.timeEnd("start");
}
solution();