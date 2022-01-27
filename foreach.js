function myForeach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array)
    }
  }

var arr=[1,2,3,4];
myForeach(arr,function(item,index,array){
    console.log(arr[index]);
})