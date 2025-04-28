let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}




function toggleForm() {
    let loginForm = document.getElementById("loginForm");
    let signupForm = document.getElementById("signupForm");
    let formTitle = document.getElementById("formTitle");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        formTitle.textContent = "Login";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        formTitle.textContent = "Signup";
    }
}

function validateLogin(event) {
    event.preventDefault(); // Prevent form submission for now
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return false;
    }

    alert("Login successful!"); // Replace with backend authentication
    return true;
}

function validateSignup(event) {
    event.preventDefault(); // Prevent form submission for now
    let username = document.getElementById("signupUsername").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (username.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
        alert("All fields are required.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    alert("Signup successful!"); // Replace with backend registration logic
    return true;
}




function clearText() {
    document.getElementById("userThoughts").value = "";
}

document.getElementById("logoutForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
    let thoughts = document.getElementById("userThoughts").value.trim();
    
    if (thoughts === "") {
        alert("Please share your thoughts before submitting.");
        return false;
    }

    alert("Thank you for sharing!");
    document.getElementById("userThoughts").value = ""; // Clear after submission
});
