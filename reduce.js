function reduce(arr, reducer, initialValue) {
    let valueAdder = initialValue 
    
    // loop though array
    for(let i=0;i<arr.length;i++)
        valueAdder = reducer(valueAdder, arr[i], i, arr);
    return valueAdder;
}
let arr = [1, 2, 3, 4];
const sumReducer = (valueAdder, currentValue) => valueAdder + currentValue;
console.log(reduce(arr,sumReducer, 10));