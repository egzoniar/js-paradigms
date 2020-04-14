const form = document.getElementById('user-input');

function singupHandler(event) {
  event.preventDefault();
  const userNameInput = document.getElementById('username');
  const enteredUsername = userNameInput.value;

  const passwordInput = document.getElementById('password');
  const enteredPassword = passwordInput.value;

  if (enteredUsername.trim().length === 0) {
    alert('Invalid input - username must not be empty');
    return;
  }
  if (enteredPassword.trim().length <= 5) {
    alert('Invalid input - password must be 6 characters or longer!');
    return;
  }

  const user = {
    userName: enteredUsername,
    password: enteredPassword
  };

  console.log(user);
  console.log('Hi, I am ' + user.userName);
}

form.addEventListener('submit', singupHandler);