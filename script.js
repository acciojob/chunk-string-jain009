  // your code here
function chunkString(str, chunkSize) {
  let result = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    result.push(str.substring(i, i + chunkSize));
  }
  return result;
}
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
