const progressBar = document.querySelector(".progress-bar");


let counter = 0;

const interval = setInterval(() => {
    if (counter >= 100) {
        clearInterval(interval); 
        progressBar.dataset.label = "Success"; // Change text to "Success"
    } else {
        counter += 1;
        progressBar.style.setProperty("--width", counter); 
    }
}, 50); // Adjusted timing for smoother sync