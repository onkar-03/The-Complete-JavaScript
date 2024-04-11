let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

// Calculate the Tips
const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
};

// Calculate the Tips &Total for all bills
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);

  const total = tips[i] + bills[i];
  totals.push(total);
}

console.log(bills);
console.log(tips);
console.log(totals);
