var users = JSON.parse(localStorage.getItem('users')) || [
  {
    username: "user1",
    pass: "pass123",
    age: 25,
    gender: "male",
    phone: "123-456-7890"
  },
  {
    username: "user2",
    pass: "abc456",
    age: 30,
    gender: "female",
    phone: "987-654-3210"
  }
]; 

function login() {
  const nameInput = document.getElementById('loginName');
  const passInput = document.getElementById('loginPass');
  const nameValue = nameInput.value.trim();
  const passValue = passInput.value.trim();

  const userFound = users.find(user => user.username === nameValue && user.pass === passValue);

  if (userFound) {
    alert('Login successful!');
    window.location.href = 'Quiz.html';
  } else {
    alert('Login failed. Incorrect username or password.');
  }
}

function signupform() {
  const username = document.getElementById('username2').value;
  const password = document.getElementById('password2').value;
  const email = document.getElementById('email').value;
  const gender = document.getElementById('female').checked ? 'female' : 'male';
  const age = document.getElementById('age').value;
  const phone = document.getElementById('num').value;

  var regex =/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;

  const newUser = 
  {
    username: username,
    pass: password,
    age: parseInt(age),
    gender: gender,
    phone: phone
  };

  const userExists = users.some(user => user.username === username);

  if(password.value.match(regex))
  {
    password=true;
  }
  else
  {
    alert('password not strong');
  }
  if (userExists) {
    alert('Username already exists!');
  } 
  else if (phone.length !== 11) 
  {
    alert('Phone number should be 11 digits!');
  } 
  else if (!(age <= 18 && age >= 60)) 
  {
    alert('Age should be between 18 and 60!');
  } 
  else
  {
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign up successful!');
    console.log(users);
  } 
  console.log(users);
}

function update() {
  const username = document.getElementById('forgetName').value;
  const newPassword = document.getElementById('forgetNewPass').value;
  const userToUpdate = users.find(user => user.username === username);
  if (userToUpdate) {
    userToUpdate.pass = newPassword;

    localStorage.setItem('users', JSON.stringify(users));
    alert('Password updated successfully!');
  } else {
    alert('Username not found!');
  }
  console.log(users);
}

