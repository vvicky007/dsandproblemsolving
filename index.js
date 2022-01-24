const isOdd = val => val % 2 !== 0;


function binarySearch(arr,value){
  // add whatever parameters you deem necessary - good luck!
  if(arr.length === 1 ) return arr[0] === value ? 0 :-1;
  if(arr.length === 0 ) return -1
  
  let middle = Math.floor((arr.length)/2)
  console.log(arr)
  if(arr[middle] === value) return middle;
  else {
      if(value>arr[middle]){
          return binarySearch(arr.slice(middle+1),value)
      }
      else{
          return binarySearch(arr.slice(0,middle),value)
      }
  } 
  
}
function insertionSort(arr){
  for(var i = 1 ; i < arr.length ; i++){
    var currentVal = arr[i]
    for(var j = i-1 ; j >=0 ; j--){
      if(arr[j]>currentVal) arr[j+1] = arr[j]
      else break;
    }
    arr[j+1] = currentVal
  }
  return arr
}
function merge(arr1,arr2){
  var l = 0 , r = 0,arr=[] ;
  while(l<arr1.length && r<arr2.length){
    if(arr2[r]>arr1[l]){
      arr.push(arr1[l])
      l++;
    }
    else{
      arr.push(arr2[r])
      r++;
    }
  }
  if(l<arr1.length){
    for(let i = l ; i < arr1.length ; i++){
      arr.push(arr1[i])
    }
  }
  if(r<arr2.length){
    for(let i = r ; i < arr2.length ; i++){
      arr.push(arr2[i])
    }
  }
  return arr;
}
function mergeSort(arr){
  if(arr.length <= 1 ) return arr;
  let left = mergeSort(arr.slice(0,Math.floor(arr.length/2))) 
  let right = mergeSort(arr.slice(Math.floor(arr.length/2))) 
  return merge(left,right)

}
console.log(merge([1,10,50],[2,14,99,100]))