window.location.reload = function () {
    console.log('Seitenneuladen wurde verhindert');
};

let socket = new WebSocket('ws://localhost:8765');

socket.onopen = function(event) {
    console.log('Verbindung hergestellt');
};

socket.onerror = function(error) {
    console.log('WebSocket-Fehler: ' + error);
};



document.querySelector('#confirmRegisterButton').addEventListener('click', function(event) {
    console.log('Button wurde geklickt');
    event.preventDefault();


    let password = document.getElementById('passwordInputRegister').value;
    let passwordConfirm = document.getElementById('passwordInputRegisterConfirm').value;

    if (password !== passwordConfirm) {
        console.log("Die Passwörter stimmen nicht überein.");
        return;
    }

    let gender = document.getElementById('genderInput').value;
    let firstName = document.getElementById('firstNameInput').value;
    let lastName = document.getElementById('lastNameInput').value;
    let dob = document.getElementById('dobInput').value;
    let email = document.getElementById('emailInput').value;
    let username = document.getElementById('usernameInput').value;

    socket.send(JSON.stringify({
        type: 'register',
        gender: gender,
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        email: email,
        username: username,
        password: password
    }));
});

document.getElementById('deleteAccountsButton').addEventListener('click', function(event) {
    event.preventDefault();

    socket.send(JSON.stringify({
        type: 'removeAccounts'
    }));
});

document.getElementById('listAccountsButton').addEventListener('click', function(event) {
    event.preventDefault();

    socket.send(JSON.stringify({
        type: 'listAccounts'
    }));
});

socket.onmessage = function(event) {
    let data = JSON.parse(event.data);
    console.log(data);
};
