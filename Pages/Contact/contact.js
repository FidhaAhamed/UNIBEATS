document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const agreement = document.getElementById('agreement').checked;

    if (!agreement) {
        alert('Please agree to data collection before submitting.');
        return;
    }

    alert(Thank you, ${name}! Your message has been sent.);
    // Handle form submission, e.g., send data to backend
});
