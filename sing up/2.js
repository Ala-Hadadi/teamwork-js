document.getElementById("signup-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const userdata = {
        username:username,
        email:email,
        password: password
    };
    
    
    try {
        let response = await fetch("https://67b741f92bddacfb270e55fb.mockapi.io/game", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });

        let data = await response.json();

        const statusMessage = document.getElementById("status-message");

        if (response.ok) {
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);

            statusMessage.textContent = "Signup successful! Redirecting to Sign In...";
            statusMessage.style.color = "green";
            
            setTimeout(() => {
                window.location.href = "http://127.0.0.1:5500/sing%20in/3.html"; 
            }, 2000);
        } else {
            statusMessage.textContent = data.message || "An error occurred!";
            statusMessage.style.color = "red";
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("status-message").textContent = "An error occurred. Please try again.";
    }
});