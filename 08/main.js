function isValidNum(checkVal) {
  if (checkVal === null) {
    return false;
  }
  if (checkVal.trim() === "") {
    return false;
  }
  if (isNaN(checkVal)) {
    return false;
  }
  return true;

  //return checkVal === null || checkVal.trim() === ""  || isNaN(checkVal)
}

let chk = 0;
let sum = 0;
do {
  const input = prompt("Input number :");

  if (isValidNum(input)) {
    chk = 1;
  } else {
    let tmp = Number(input);
    sum += tmp;
    console.log(sum);
  }
} while (chk == 0);
