const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// This script validates the login form
function validateLoginForm() {
    var email = document.forms["loginForm"]["email"].value;
    var password = document.forms["loginForm"]["password"].value;

    if (email == "") {
        alert("Please enter your email address.");
        return false;
    }

    if (password == "") {
        alert("Please enter your password.");
        return false;
    }
}

// This script validates the sign-up form
function validateSignupForm() {
    var name = document
}