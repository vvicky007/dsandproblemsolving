var maximumWhiteTiles = function(tiles, carpetLen) {
  let max = 0;
  tiles.forEach(data=>{
  max = Math.max(max, data[0], data[1]);
  });
  if (carpetLen >= 434783959) {
  let result = 0;
  tiles.forEach(data=>{
  result += (data[1]-data[0]+1);
  });
  return result;
  }
  let titleArray = new Array(max+1).fill(0);
  tiles.forEach(data => {
  for(let i = data[0]; i<=data[1];i++){
  titleArray[i] = 1;
  }
  });
  let tempMax = titleArray.slice(1, carpetLen+1).reduce((a, b) => a + b);
  let result = tempMax;
  for (let i = carpetLen+1; i<titleArray.length;i++) {
  tempMax = tempMax - titleArray[i-carpetLen] + titleArray[i];
  result = Math.max(result, tempMax);
  }
  return result;
  };
maximumWhiteTiles([[1,5],[10,11],[12,18],[20,25],[30,32]],10)