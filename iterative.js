const data = [1,3,5];
const t = 7;
let map = new Array(t+1);
let final;

for(let i=0 ; i <= t+1 ; i++){
    map[i] = [];
    for(let j=0 ; j <= data.length-1 ; j++){
        map[i][j] = 0;
    }
}

for(let j = 0 ; j < data.length ; j++)
    map[0][j] = 1;

odm(t, data);
function odm(t, data){
    for(let i = 1 ; i <= t ; i++){
        for(let j = data.length -1 ; j>=0 ; j--){
            let k = data.length -1;
            while(j <= k){
                if(i-data[k] < 0)
                    map[i][j] += 0;
                else
                    map[i][j] += map[i-data[k]][k]
                k--;
            }
        }
    }
}

console.log(map);
console.log("Order doesn't matter: " + map[t][0]);