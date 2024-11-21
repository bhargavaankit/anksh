// Set the date we're counting down to
const countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();
const totalTime = (countDownDate - new Date().getTime()) / 1000; // Total time in seconds

// Update the countdown every second
const x = setInterval(function() {
    
    const now = new Date().getTime();
    
    // Calculate remaining time
    const distance = countDownDate - now;

    // Time calculations for minutes and seconds
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the label
    document.getElementById("base-timer-label").innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Calculate the percentage of time remaining
    const elapsedTime = totalTime - (distance / 1000);
    const remainingPathColor = document.querySelector('.base-timer__path-remaining');
    
    if (distance >= 0) {
        const remainingPathLength = (elapsedTime / totalTime) * 283; // Circumference of the circle
        remainingPathColor.style.strokeDashoffset = remainingPathLength;
        
        // If the countdown is finished
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("base-timer-label").innerHTML = "EXPIRED";
        }
        
    } else {
        clearInterval(x);
        document.getElementById("base-timer-label").innerHTML = "EXPIRED";
        remainingPathColor.style.strokeDashoffset = "283"; // Reset for visual consistency
    }
}, 1000);
