document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
        alert('Alla fält måste fyllas i!');
        return;
    }

    // Simulate a form submission (for demonstration purposes)
    const responseMessage = `Tack för ditt meddelande, ${name}! Vi återkommer så snart som möjligt.`;
    document.getElementById('response-message').innerText = responseMessage;

    // Reset the form
    document.getElementById('contact-form').reset();
});
