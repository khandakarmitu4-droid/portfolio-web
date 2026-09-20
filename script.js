document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('successMsg').innerText = '';

    let isValid = true;

    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required.';
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById('emailError').innerText = 'Enter a valid email address.';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').innerText = 'Message is required.';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('successMsg').innerText = 'Thank you! Your message has been sent successfully.';
        document.getElementById('contactForm').reset();
    }
});