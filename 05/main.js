function Cal_Interest(Int_rate, year, start) {
  Int_rate = Number(Int_rate).toFixed(1);
  start = Number(start);

  let total = 0;
  let tmp = 0;
  for (let i = 1; i <= year; i++) {
    if (i == 1) {
      total = start + (Int_rate / 100) * start;
      tmp = total;
      //console.log(tmp);
    } else {
      total = total + (Int_rate / 100) * tmp;
      tmp = total;
      // console.log(tmp);
    }
  }
  const money = new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
  });
  console.log(money.format(total.toFixed(2)));
}

Cal_Interest(2.5, 10, 100000);
