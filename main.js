// --- Universal Preloader & Animations (Keep this part as is) ---
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        if (preloader) {
            preloader.classList.add('hidden');
        }
    }, 200);
});

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// --- Nail Booking Form Logic (UPDATED) ---
const emailForm = document.getElementById('emailForm');

if (emailForm) {
    emailForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default submission

        const submitBtn = document.getElementById('submit-btn');
        const feedbackMessage = document.getElementById('form-feedback');

        // Show loading state on button
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const serviceType = document.getElementById('service-type').value;
        const note = document.getElementById('note').value;
        
        if (!name || !date || !time) {
            alert("Please fill in your Name, Date, and Time.");
            submitBtn.disabled = false;
            submitBtn.textContent = 'Get Glam!';
            return;
        }
        
        const recipientEmail = "techdevtea@gmail.com"; 
        const subject = encodeURIComponent(`New Booking Request from ${name}`);
        const body = encodeURIComponent(
            `Hello Nhiffy Suite,\n\nI would like to book an appointment.\n\n` +
            `Name: ${name}\n` +
            `Service Type: ${serviceType}\n` +
            `Preferred Date: ${date}\n` +
            `Preferred Time: ${time}\n\n` +
            `Additional Notes:\n${note}\n\n` +
            `Looking forward to my appointment!`
        );

        const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

        // Show feedback message FIRST
        if (feedbackMessage) {
            feedbackMessage.style.display = 'block';
        }

        // Wait 2 seconds, then redirect to email client.
        setTimeout(() => {
            window.location.href = mailtoLink;
            
            // Reset button after a delay
            submitBtn.disabled = false;
            submitBtn.textContent = 'Get Glam!';
            if (feedbackMessage) {
               feedbackMessage.style.display = 'none';
            }
        }, 2000); // 2-second delay
    });
}