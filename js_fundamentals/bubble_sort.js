function bubbleSort(arr){
  var temp, count=0;
  for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
      if (arr[i] > arr[j]){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        count++
      }
    }
    if(count == 0){
      console.log('early exit')
      return arr
    }
  }
  return arr
}

console.log(bubbleSort([5,8,2,6,1]))
console.log(bubbleSort([1,2,3,4,5]))

// PrintArray is an O(n) 
function printArray(arr){
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

// FindNth is an O(1)
function findNth(arr, n){
  console.log(arr[n]);
}

// Havling is an O(log n)
function halving(n){
  var count = 0;
  while(n > 1){
    n =n/2;
    count++
  }
  return count
}

// IdentifyMatrix is an O(n^2)
function identifyMatrix(n){
  var matrix = [];
  for(var i = 0 ; i < n ;i++){
    var row = [];
    for(var j= 0; j < n; j++){
      if(j==0){
        row.push(i);
      }else{
        row.push(0)
      }
    } 
    matrix.push(row)
  }
  return matrix;
}
