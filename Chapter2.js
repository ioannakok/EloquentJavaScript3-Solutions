// Exercise 2.1: Looping a triangle
let hash = "#"
while(hash.length < 8) {
	console.log(hash);
  	hash+="#";
}

// Exercise 2.2: FizzBuzz
for(let num = 0; num <= 100; num++) {
  let output = "";
  if(num % 3 == 0)
    output += "Fizz";
  else if(num % 5 == 0)
    output += "Buzz";
  else
    output = num;
  console.log(output)
}

// Exercise 2.3: Chess Board
let size = 8;
for(let i = 0; i < size; i++) {
  	let output = "";
	for(let j = 0; j < size; j++) {
      if((i + j) % 2 == 0)
        output += " ";
      else
        output += "#";
    }
	console.log(output);
}
