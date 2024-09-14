document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'user' && password === 'password') {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').textContent = 'Login successful!';
    } else {
      document.getElementById('message').textContent = 'Invalid username or password.';
    }
  });
  