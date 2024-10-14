// script.js

// Set the date we're counting down to
const countDownDate = new Date("Oct 15, 2024 00:00:00").getTime();

// Update the count down every 1 second
const countdownFunction = setInterval(function() {

    // Get current date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
    
    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
    const minutes = Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60) );
    const seconds = Math.floor( (distance % (1000 * 60)) / 1000 );
    
    // Display the result
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
    // If the countdown is over
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Happy Birthday Neha!";
    }
}, 1000);
