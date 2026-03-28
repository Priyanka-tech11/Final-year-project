const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://ai-healthcare-app-production.up.railway.app/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {

      const result = await response.text(); // ✅ FIX

      document.getElementById('loginMessage').textContent = "Login Successful!";

      // ✅ STORE USER PROPERLY
      localStorage.setItem("user", JSON.stringify({
        name: result || "User",
        email: email
      }));

      window.location.href = "dashboard.html";

    } else {

      const error = await response.text(); // ✅ show real backend error
      document.getElementById('loginMessage').textContent = error;

    }

  } catch (error) {
    document.getElementById('loginMessage').textContent = "Error connecting to server.";
    console.error(error);
  }
});