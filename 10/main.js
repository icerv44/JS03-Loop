let msg = [];
let chk = 0;

function checkPrime(num) {
  chk = 0;
  num = Number(num);
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      chk = 1;
      break;
    }
    //msg.push(num);
  }
  if (chk == 0) {
    //console.log("num " + num);
    msg.push(num);
  }
}

for (let i = 1; i <= 100; i++) {
  if (i !== 1) {
    checkPrime(i);
  }
}

msg.forEach((element) => console.log(element + "\n"));
