/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    
  let arr = Array.from(Array(m), () => Array(n).fill('0'));
  for (let i =0; i<guards.length; i++)
  arr[guards[i][0]][guards[i][1]] = 'g';
for (let i =0; i<walls.length; i++)
  arr[walls[i][0]][walls[i][1]] = 'w';
for (let i =0, r,c; i<guards.length; i++) {
  r=guards[i][0];
  c=guards[i][1];
  for (let u=r-1; u>=0; u--) {
      if (arr[u][c]=='w'||arr[u][c]=='g') break;
      arr[u][c]='1';
  }
  for (let u=r+1; u<m; u++) {
      if (arr[u][c]=='w'||arr[u][c]=='g') break;
      arr[u][c]='1';
  }
  for (let u=c-1; u>=0; u--) {
      if (arr[r][u]=='w'||arr[r][u]=='g') break;
      arr[r][u]='1';
  }
  for (let u=c+1; u<n; u++) {
      if (arr[r][u]=='w'||arr[r][u]=='g') break;
      arr[r][u]='1';
  }
}
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += (arr[i][j]=='0')?1:0;
  }
}
return sum;
};