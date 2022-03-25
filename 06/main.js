let msg = "";

for (let i = 0; i < 5; i++) {
  console.log("i ", i);

  for (let j = 0; j < i; j++) {
    console.log("j ", j);
    msg += "* ";
  }
  msg += "\n";
}

console.log(msg);
