let chk = 0;
let chk2 = 0;

do {
  const In_User1 = prompt("User1 Input number 1-99:");
  let numUser1 = Number(In_User1);
  if (numUser1 > 100 || numUser1 < 1) {
    alert("Please enter a number 1-99");
  } else {
    do {
      const In_User2 = prompt("User2 Input number 1-99:");
      let numUser2 = Number(In_User2);
      if (numUser2 > 100 || numUser2 < 1) {
        alert("Please enter a number 1-99");
      } else {
        if (numUser2 === numUser1) {
          chk = 1;
          chk2 = 1;
          alert("Correct value is " + numUser1);
        } else if (numUser2 < numUser1) {
          alert("Value of User 2 less than User1");
        } else {
          alert("Value of User 2 more than User1");
        }
      }
    } while (chk2 == 0);
  }
} while (chk == 0);
