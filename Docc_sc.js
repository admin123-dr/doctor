let attempts = 1;
let timeout = false;
let countdownTimer = 10;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (timeout) {
        alert("Please wait 10 seconds before trying again.");
        return;
    }

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Both fields are required.");
        return;
    }

    const correctUsername = 'admin123';
    const correctPassword = 'admin123';

    if (username === correctUsername && password === correctPassword) {
        alert("Login Successful!");
        window.location.href = "LD1FINALS_2D_DOCTOR.html";
    } else {
        document.getElementById('error-message').textContent = "Incorrect username or password. Attempt " + attempts + "/1";

        attempts--;

        if (attempts <= 0) {
            timeout = true;
            countdownTimer = 10;

            const countdownInterval = setInterval(function() {
                document.getElementById('error-message').textContent = "Too many failed attempts. Please wait " + countdownTimer + " seconds.";

                if (countdownTimer <= 0) {
                    clearInterval(countdownInterval);
                    timeout = false;
                    attempts = 1;
                    document.getElementById('error-message').textContent = "";
                } else {
                    countdownTimer--;
                }
            }, 1000);
        }
    }
});
