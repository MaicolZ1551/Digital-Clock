// Get references to the HTML elements that display the hour, minute, and second
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

// Function to update the time every second
function updateTime() {
    const currentDate = new Date(); // Get the current date and time

    // Update the content of each element with two-digit values
    hour.textContent = String(currentDate.getHours()).padStart(2, '0');
    minute.textContent = String(currentDate.getMinutes()).padStart(2, '0');
    second.textContent = String(currentDate.getSeconds()).padStart(2, '0');
}

// Call updateTime every 1000 milliseconds (1 second)
setInterval(updateTime, 1000);

// Call it once immediately to avoid delay before the first update
updateTime();
