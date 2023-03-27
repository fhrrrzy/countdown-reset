// Set the start time for the countdown (1 hour)
let countdownTime = 60 * 60;

// Get the countdown element and changeIndex button from the HTML
const countdownEl = document.getElementById('countdown');
const changeIndexBtn = document.getElementById('changeIndex');

// Set up a proxy for the columnIndex variable
let columnIndex = new Proxy({}, {
  set: function(obj, prop, value) {
    obj[prop] = value;
    // Call the resetTimer function when the columnIndex changes
    resetTimer();
    return true;
  }
});

// Function to update the countdown display
function updateCountdown() {
  const hours = Math.floor(countdownTime / 3600);
  const minutes = Math.floor((countdownTime % 3600) / 60);
  const seconds = countdownTime % 60;
  
  countdownEl.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  countdownTime--;
  
  // If the countdown reaches 0, reset it to 1 hour
  if (countdownTime < 0) {
    countdownTime = 60 * 60;
  }
  
  // Update the countdown every second
  setTimeout(updateCountdown, 1000);
}

// Function to reset the timer to 1 hour
function resetTimer() {
  countdownTime = 60 * 60;
}

// Add a click event listener to the changeIndex button
changeIndexBtn.addEventListener('click', function() {
  // Change the columnIndex value to a random number between 1 and 10
  columnIndex.value = Math.floor(Math.random() * 10) + 1;
});

// Start the countdown
updateCountdown();
