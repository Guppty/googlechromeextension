const progressBar = document.querySelector(".progress-bar");


let counter = 0;

const interval = setInterval(() => {
    if (counter >= 100) {
        clearInterval(interval); 
        progressBar.dataset.label = "All Pop Up Ads Blocked!"; 
    } else {
        counter += 1;
        progressBar.style.setProperty("--width", counter); 
    }
}, 50); 