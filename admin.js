function validateLogin(event) {
    event.preventDefault();

    const correctUsername = "admin";
    const correctPassword = "31325"; 
    const correctSecretCode = "apple pie"

    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
    const enteredSecretCode = document.getElementById("secretCode").value;
    const errorMessage = document.getElementById("error-message");

    if (enteredUsername === correctUsername && enteredPassword === correctPassword && enteredSecretCode === correctSecretCode) {
        window.location.href = "admin_side.html";
    } else {
        errorMessage.style.display = "block";
    }
}
