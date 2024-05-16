// Real Time Clock
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  console.log(timeString);
}

// Update the clock immediately to avoid initial delay
updateClock();

// Update the clock every second using setInterval
setInterval(updateClock, 1000);

// Process
// - The `updateClock()` function is defined to retrieve the current time, format it, and log it to the console.
// - Upon defining the function, it is immediately called once to display the current time without any initial delay.
// - After the initial display, `setInterval()` is used to repeatedly call the `updateClock()` function every second (1000 milliseconds).
// - This ensures that the clock display is updated in real-time by calling the `updateClock()` function at regular intervals.
