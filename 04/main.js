let sum;
let sum2;

function allPlus(a, b) {
  sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  console.log("All Plus : " + sum);
}

function SumEven(a, b) {
  sum = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  console.log("SumEven : ", sum);
}

function SumOdd(a, b) {
  sum = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 == 1) {
      sum += i;
    }
  }
  console.log("SumOdd : ", sum);
}

function Sum_Power(a, b) {
  sum = 0;
  sum2 = 0;
  let total = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      sum = sum + Math.pow(i, 2);
    }
  }

  for (let i = a; i <= b; i++) {
    if (i % 3 == 0) {
      sum2 = sum2 + Math.pow(i, 2);
    }
  }

  total = sum - sum2;
  console.log("Sum_Power : " + total);
}

allPlus(1, 100);
SumEven(1, 100);
SumOdd(1, 100);
Sum_Power(1, 100);
