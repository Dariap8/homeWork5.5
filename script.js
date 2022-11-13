let array = [];

for (let i = 0; i < 10; i++) {
  array.push(prompt("Enter something here"));
}

array.forEach(arrayLog);

function arrayLog(input) {
  console.log(input);
}
