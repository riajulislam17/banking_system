document.getElementById('login').addEventListener('click', function () {
    // get user name
    const emailInput = document.getElementById('username');
    const userName = emailInput.value;

    // get user password
    const passwordInput = document.getElementById('password');
    const userPassword = passwordInput.value;

    if (userName == 'riaj@islam.com' && userPassword == 'riaj') {
        window.location.href = 'home.html';
    }
    else {
        window.alert('Incorrect username or password.');
    }
});