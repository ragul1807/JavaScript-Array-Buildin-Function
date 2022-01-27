/*let arr = [1, 2, 3, 4, 5];
function map(arr, mapFunc) {
   const mapArr = []; // empty array
   
   // loop though array
   for(let i=0;i<arr.length;i++) {
       const result = mapFunc(arr[i], i, arr);
       mapArr.push(result);
   }
   return mapArr;
}
const squareArr2 = map(arr, num => num ** 2);
console.log(squareArr2);*/

Array.prototype.map = function(callBack) {

    let new_arr = []
    for (let item of this) {
        new_arr.push(callBack(item))
    }
    return new_arr;
}
var arr = [30, 40, 50];
console.log(arr.map((i) => i * 2));
console.log(arr.map((i) => i / 2));
