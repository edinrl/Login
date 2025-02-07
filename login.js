document.addEventListener("DOMContentLoaded", function () {
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");

    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            this.textContent = "🙉"; 
        } else {
            passwordInput.type = "password";
            this.textContent = "🙈"; 
        }
    });
});
