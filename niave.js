const array = [1,3,5];
const value = 7;
let final = 0;
let map = new Array(value+1).fill(0);

OrderDoesMatter(array, value);
function OrderDoesMatter(_array, _value){
    console.log('value ' + _value)
    
    if(_value == 0){
        console.log('base');
        return final += 1;
    }
    

    for(let i = 0 ; i < _array.length ; i++){
        if((_value - _array[i]) >= 0){
            OrderDoesMatter(_array, _value-_array[i]);
        }
    }
};
console.log(final);

final = 0; //reset
OrderDoesntMatter(array, value, value);
function OrderDoesntMatter (_array, _value, _check){
    console.log('value ' + _value)
    
    if(_value == 0){
        console.log('base');
        return final += 1;
    }
    

    for(let i = 0 ; i < _array.length ; i++){
        if((_value - _array[i]) >= 0 && _check>=_array[i]){
            OrderDoesntMatter(_array, _value-_array[i], _array[i]);
        }
    }
};
console.log(final);
