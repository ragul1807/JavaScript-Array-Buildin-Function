function filter(array, filterCallback) {
    const filterArr = []; 
    for(let i=0;i<array.length;i++) {
        const result = filterCallback(array[i], i, array);
        if(result) 
            filterArr.push(array[i]);  // Odd values gets added
    }
    return filterArr;
}
let arr = [1, 2, 3, 4, 5];
const evenValue = filter(arr, num => num % 2 === 1); //to filter even values
console.log(evenValue); 