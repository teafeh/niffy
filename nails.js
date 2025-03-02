window.addEventListener("load", function(){
    this.setTimeout(function(){
        var preloader = document.getElementById("preloader");
    var content = document.getElementById("content");

    preloader.style.display = "none";
    content.style.display = "block";

    }, 2000)
    
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit-btn").addEventListener("click", function () {
        console.log("Submit button clicked!");

        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const serviceType = document.getElementById("service-type").value;
        const note = document.getElementById("note").value;

        if (!name || !date || !time) {
            alert("Please fill in all required fields.");
            return;
        }

        const recipientEmail = "techdevtea@gmail.com";
        const subject = encodeURIComponent("Your Glam Appointment Awaits!");
        const body = encodeURIComponent(
            `Hello ${name},\n\nI'm excited to book an appointment with you!\nHere are my details:\nDate: ${date}\nTime: ${time}\nService: ${serviceType}\n\nLooking forward to a fabulous experience!\n\nBest,\n${name}`
        );

        // Detect if the user is on a mobile device
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            // Use mailto on mobile (opens default email app)
            window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
        } else {
            // Open Gmail in a new tab on PC
            const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`;
            const newTab = window.open(gmailLink, "_blank");

            // If pop-ups are blocked, show a fallback alert
            if (!newTab) {
                alert("Pop-ups are blocked. Please enable pop-ups or use your email app manually.");
            }
        }
    });
});
