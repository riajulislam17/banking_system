// Handle Deposit Button
document.getElementById('depositButton').addEventListener('click', function () {
    // Get Deposit Input
    const depositInput = document.getElementById('depositInput');
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText);
    if (typeof depositInputAmount == 'number' && depositInputAmount > 0) {
        // Update Deposit Balance
        const deposit = document.getElementById('deposit');
        const depositText = deposit.innerText;
        const depositAmount = parseFloat(depositText);
        const depositBalance = depositInputAmount + depositAmount;
        deposit.innerText = depositBalance;

        // Update Account Balance After Deposit
        const balance = document.getElementById('balance');
        const balanceText = balance.innerText;
        const balanceAmount = parseFloat(balanceText);
        const accountBalance = depositBalance + balanceAmount;
        balance.innerText = accountBalance;
        depositInput.value = '';
    }
    else {
        window.alert('Enter valid Amount');
    }
});

// Handle Withdraw Button
document.getElementById('withdrawButton').addEventListener('click', function () {
    // Get Withdraw Input
    const withdrawInput = document.getElementById('withdrawInput');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);

    //Get Account Balance
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);
    withdrawInput.value = '';

    if (typeof withdrawInputAmount == 'number' && withdrawInputAmount > 0) {
        if (withdrawInputAmount <= balanceAmount) {
            // Update Withdraw Balance
            const withdraw = document.getElementById('withdraw');
            const withdrawText = withdraw.innerText;
            const withdrawAmount = parseFloat(withdrawText);
            const withdrawBalance = withdrawInputAmount + withdrawAmount;
            withdraw.innerText = withdrawBalance;

            // Update Account Balance After Withdraw
            const accountBalance = balanceAmount - withdrawBalance;
            balance.innerText = accountBalance;
        }
        else {
            window.alert('You can not withdraw more than your account balance.');
        }
    }
    else {
        window.alert('Enter valid Amount');
    }
});