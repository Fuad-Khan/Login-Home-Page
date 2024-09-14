document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check for valid username and password (hardcoded for now)
    if (username === 'admin' && password === 'admin') {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').textContent = 'Login successful!';
      
      // Redirect to the home page after 1 second
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 1000);
    } else {
      document.getElementById('message').textContent = 'Invalid username or password.';
    }
  });
  