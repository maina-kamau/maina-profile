// Function to get a greeting based on the time of day in a specific timezone
function getGreeting() {
    const now = new Date();

    // Format time for a specific timezone (Africa/Nairobi for JKUAT location)
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Nairobi',
        hour: 'numeric',
        hourCycle: 'h23',
    });

    const hour = parseInt(formatter.format(now), 10);

    if (hour < 12) {
        return "🌅 Good Morning!";
    } else if (hour < 18) {
        return "🌞 Good Afternoon!";
    } else {
        return "🌙 Good Evening!";
    }
}

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const error = document.getElementById('error');

    // Simple email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate fields
    if (!name || !email || !emailRegex.test(email)) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
        alert(`Thank you, ${name}, for subscribing to the newsletter!`);
        // Optionally reset the form
        document.getElementById('newsletterForm').reset();
    }
});

// Set the greeting in the paragraph with id 'greeting'
document.getElementById('greeting').textContent = getGreeting();

const button = document.getElementById('learnMoreButton');
const collapsible = document.querySelector('.collapsible');

button.addEventListener('click', () => {
    collapsible.classList.toggle('open');
    button.textContent = collapsible.classList.contains('open') ? 'Show Less' : 'Learn More';
});