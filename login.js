const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      document.getElementById('loginMessage').textContent = "Login Successful!";
      window.location.href = "dashboard.html";
    } else {
      const error = await response.text();
      document.getElementById('loginMessage').textContent = "Login Failed! Check email/password.";
    }
  } catch (error) {
    document.getElementById('loginMessage').textContent = "Error connecting to server.";
    console.error(error);
  }
});