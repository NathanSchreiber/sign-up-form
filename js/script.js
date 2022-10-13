const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const form = document.querySelector("form");

// Validate field while typing
email.addEventListener("input", (event) => {
    if (email.validity.valueMissing) {
        email.classList.remove("error");
    } else if (!email.validity.valid) {
        email.classList.add("error");
    } else if (email.validity.valid) {
        email.classList.remove("error");
    }
});

form.addEventListener("submit", (event) => {
    if (confirm.value !== password.value) {
        event.preventDefault();
        confirm.classList.add("error");
    }
});