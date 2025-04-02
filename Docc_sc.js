
let attempts = 3; 
let timeout = false;

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

       
        if (attempts >= 1) {
            timeout = true;
            setTimeout(() => {
                timeout = false;
                attempts = 0; 
                document.getElementById('error-message').textContent = "";
            }, 10000); 
        }
    }
});
