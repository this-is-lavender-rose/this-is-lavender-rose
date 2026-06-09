// The base64 encoded version of your actual password
// You can generate yours in the browser console by typing: btoa("your_password")
const ENCODED_PASS = "ZnJ1aXQ="; 
const TARGET_USER = "luffy";

function checkCredentials() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    // Convert the typed password to base64 to check against our stored string
    const encodedInput = btoa(pass);

    if (user === TARGET_USER && encodedInput === ENCODED_PASS) {
        // Store a simple flag so home.html knows we logged in
        sessionStorage.setItem("isAuthenticated", "true");
        window.location.href = "home.html";
    } else {
        errorMsg.textContent = "Invalid Credentials. Access Denied.";
    }
}