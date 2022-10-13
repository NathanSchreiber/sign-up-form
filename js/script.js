const form = document.querySelector('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const submit = document.getElementById('submit');

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

phone.addEventListener("input", (event) => {
    if (phone.validity.valueMissing) {
        phone.classList.remove("error");
    } else if (!phone.validity.valid) {
        phone.classList.add("error");
    } else if (phone.validity.valid) {
        phone.classList.remove("error");
    }
});

firstName.addEventListener("input", (event) => {
    if (firstName.value !== "") {
        firstName.classList.remove("error");
    }
});

lastName.addEventListener("input", (event) => {
    if (lastName.value !== "") {
        lastName.classList.remove("error");
    }
});

password.addEventListener("input", (event) => {
    if (password.value !== "") {
        password.classList.remove("error");
    }
});

confirm.addEventListener("input", (event) => {
    if (confirm.value !== "") {
        confirm.classList.remove("error");
    }
});


// Check if password confirmation matches password
form.addEventListener("submit", (event) => {
    if (confirm.value !== password.value) {
        event.preventDefault();
        confirm.classList.add("error");
    };
});

// Add error styles if fields are empty
submit.addEventListener("click", (event) => {
    if (firstName.validity.valueMissing) {
        firstName.classList.add("error");
    }

    if (lastName.validity.valueMissing) {
        lastName.classList.add("error");
    }

    if (email.validity.valueMissing) {
        email.classList.add("error");
    }

    if (password.validity.valueMissing) {
        password.classList.add("error");
    }

    if (confirm.validity.valueMissing) {
        confirm.classList.add("error");
    }
});