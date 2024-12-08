/*
1-View balance
2-Withdraw money
3-Deposit money
4-Exit

ATM APPLICATION
*/
let newLine = "\r\n";
let balance = 1000;

let text = "1-View Balance " + newLine +
    "2-Withdraw Money" + newLine +
    "3-Deposit Money" + newLine +
    "4-Exit" + newLine +
    "Please select a value.";
// alert(text);

let selection = prompt(text);
switch (selection) {
    case "1":
        alert("Your balance : " + balance);
        break;
    case "2":
        let withdrawAmount = Number(prompt("Enter the amount you want to withdraw :"));
        if (AmounttoWithdraw < balance) {
            //successful
            balance = balance - AmounttoWithdraw;
            alert("Remaining balance: " + balance);
        } else {
            alert("You cannot withdraw more money than your balance!" + newLine +
                "Your balance: " + balance + " " + "Amount to Withdraw: " + AmounttoWithdraw);
        }
        break;