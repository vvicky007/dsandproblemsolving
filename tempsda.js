
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) 
{ 
  console.log('data is', stdin_input)
        stdin_input += input;   // Read input from STDIN
        main(stdin_input)
});

process.stdin.on("end", function () 
{
        main(stdin_input);
});



// Warning: Printing unwanted or ill-formatted 
// data to output will cause the test cases to fail

function main(input)
{
  const [len,arr,k] = input.split('')
  console.log(len,arr,k)
        // Write your code here
}