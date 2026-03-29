const form = document.getElementById('signupForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    document.getElementById('signupMessage').textContent = "Passwords do not match!";
    return;
  }

  try {
    const response = await fetch('https://ai-healthcare-app-production.up.railway.app/auth/signup',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullname, email, password })
    });

    if (response.ok) {
      document.getElementById('signupMessage').textContent = "Signup Successful! Please login now.";
      setTimeout(() => { window.location.href = "login.html"; }, 1500);
    } else {
      const error = await response.text();
      document.getElementById('signupMessage').textContent = "Signup Failed! " + error;
    }
  } catch (error) {
    document.getElementById('signupMessage').textContent = "Error connecting to server.";
    console.error(error);
  }
});
