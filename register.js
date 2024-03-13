document.getElementById('confirmRegisterButton').addEventListener('click', function() {
  // Daten aus den Eingabefeldern holen
  let gender = document.getElementById('genderInput').value;
  let firstName = document.getElementById('firstNameInput').value;
  let lastName = document.getElementById('lastNameInput').value;
  let dob = document.getElementById('dobInput').value;
  let email = document.getElementById('emailInput').value;
  let username = document.getElementById('usernameInput').value;
  let password = document.getElementById('passwordInputRegister').value;

  // AJAX-Aufruf an den /register-Endpunkt senden
  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      gender: gender,
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      email: email,
      username: username,
      password: password
    }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === 'Erfolg') {
      console.log('Erfolg:', data.message);
    } else {
      console.error('Fehler:', data.message);
    }
  })
  .catch((error) => {
    console.error('Fehler:', error);
  });
});


document.getElementById('listAccountsButton').addEventListener('click', function() {
  // AJAX-Aufruf an den /listAccounts-Endpunkt senden
  fetch('/listAccounts')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Fehler:', error);
    });
});
