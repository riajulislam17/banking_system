/*----->> Handle Deposit Button <<-----*/
document.getElementById('depositButton').addEventListener('click', function() {
    const depositInput = getInputAmount('depositInput');
    if (depositInput > 0) {
        updateBalance('deposit', depositInput);
        updateAccountBalance(depositInput, true);
    }
    else {
        window.alert('Enter valid Amount');
    }
});

/*----->> Handle Withdraw Button <<-----*/
document.getElementById('withdrawButton').addEventListener('click', function() {
    const withdrawInput = getInputAmount('withdrawInput');
    const currentBalance = getCurrentAmount();
    if (withdrawInput > 0) {
        if (withdrawInput <= currentBalance) {
            updateBalance('withdraw', withdrawInput);
            updateAccountBalance(withdrawInput, false);
        }
        else {
            window.alert('You can not withdraw more than your account balance.');
        }
    }
    else {
        window.alert('Enter valid Amount');
    }
});

/*----->> Get Input Amount After Parse <<-----*/
function getInputAmount(inputId) {
    const input = document.getElementById(inputId);     //access input field by id
    const inputText = input.value;  //get input value
    const inputAmount = parseFloat(inputText);  //convert text to float number
    input.value = '';   //clear input field
    return inputAmount;
}

/*----->> Update Transaction Balance <<-----*/
function updateBalance (id, amount) {
    const transaction = document.getElementById(id);    //access transaction amount by id
    const transactionText = transaction.innerText;  //get transaction amount value
    const transactionAmount = parseFloat(transactionText);  //convert transaction amount to float number
    const transactionBalance = transactionAmount + amount;  //transaction amount update
    transaction.innerText = transactionBalance;     //display transaction amount
}

/*----->> Update Main Balance <<-----*/
function getCurrentAmount() {
    const transaction = document.getElementById('balance');     //access current amount by id
    const transactionText = transaction.innerText;  //get current amount value
    const transactionAmount = parseFloat(transactionText);  //convert current amount to float number
    return transactionAmount;
}

/*----->> Update Main Balance <<-----*/
function updateAccountBalance (inputAmount, isAdd) {
    const accountBalance = document.getElementById('balance');
    const currentBalance = getCurrentAmount();
    if (isAdd == true) {
        accountBalance.innerText = currentBalance + inputAmount;    //update main balance for deposit
    }
    else {
        accountBalance.innerText = currentBalance - inputAmount;    //update main balance for withdraw
    }
}