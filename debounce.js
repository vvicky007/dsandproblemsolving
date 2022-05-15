const goodFunc = (fn,delay)=>{
  let clearTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(clearTimer);
        clearTimer = setTimeout(() => fn.apply(context, args), delay);
    }
}
let count = 0
const x = ()=>{
    console.log('.....',count+1)
}
for(let i = 0 ; i < 10;i++){
    goodFunc(x,3000)();
}