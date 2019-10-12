const data = [1,3,5]; //data set
const t =7; //wanted sum
let doesmap = new Array(t+1).fill(0); //map for dynamic order does
let check = t;
let notmap = new Array(t+1);

for(i=0 ; i <= t+1 ; i++){
    notmap[i] = [];
    for(j=0 ; j<=data.length-1 ; j++)
        notmap[i][j] = 0;
}

console.log(notmap)


OrderDoesMatter(data, t); //call to function

function OrderDoesMatter(_array, _value){
    console.log('value = ' + _value) //value for iter you are on
    
    //if in map take from it
    if(doesmap[_value] != 0){
        console.log('already in map');
        return doesmap[_value]
    }

    //Base case
    if(_value == 0){
        doesmap[_value] = 1;
    }

    //check to see if you can sub a value from array. recursivly call it
    for(let i = 0 ; i < _array.length ; i++){
        if((_value - _array[i]) >= 0){
            doesmap[_value] += OrderDoesMatter(_array, _value-_array[i]);
        }
    }
    return doesmap[_value];
};

console.log("Order Does final: " + doesmap[t] + "\n");

OrderDoesntMatter(data, t, data.length-1);
function OrderDoesntMatter (_array, _value, _check){
    console.log("value" + _value + " check " + _check)

    //if in map take from it
    if(notmap[_value][_check] != 0){
        console.log("already in map")
        return notmap[_value][_check]
    }

    //Base case
    if(_value == 0){
        notmap[_value][_check] = 1;
    }

    for(let i = 0 ; i < _array.length ; i++){
        //console.log('array index ' + _array[_check]);
        if((_value - _array[i]) >= 0 && _array[_check] >=_array[i]){
            notmap[_value][_check] += OrderDoesntMatter(_array, _value-_array[i], i);
            //console.log(notmap[_value][_check])
        }
        //console.log(notmap);
    }
    return notmap[_value][_check]
};

console.log(notmap);
console.log("Order Doesn't Final: " + notmap[t][2])