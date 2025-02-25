window.addEventListener("load", function(){
    this.setTimeout(function(){
        var preloader = document.getElementById("preloader");
    var content = document.getElementById("content");

    preloader.style.display = "none";
    content.style.display = "block";

    }, 2000)
    
});



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit-btn").addEventListener("click", function() {
        console.log("Submit button clicked!"); // Debugging log

        // Get form values
        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const serviceType = document.getElementById("service-type").value;
        const note = document.getElementById("note").value;

        // Ensure required fields are filled
        if (!name || !date || !time) {
            alert("Please fill in all required fields.");
            return;
        }

        // Set the recipient email address
        const recipientEmail = "techdevtea@gmail.com"; // Change this to your email

        // Construct email parameters
        const subject = encodeURIComponent("Your Glam Appointment Awaits!");
        const body = encodeURIComponent(
            `Hello ${name},\n\nI'm excited to book an appointment with you!\nHere are my details:\nDate: ${date}\nTime: ${time}\nService: ${serviceType}\n\nLooking forward to a fabulous experience!\n\nBest,\n${name}`
          );          

        // Construct Gmail link with recipient email
        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`;

        // Try opening Gmail in a new tab
        const newTab = window.open(mailtoLink, "_blank");
    });
});
