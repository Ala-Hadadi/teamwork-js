document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert("Successfully logged in!");
        window.location.href="../homeSing.htm"

    } else {
        alert("Please enter both email and password.");
    }
});