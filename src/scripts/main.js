// Select all day elements
const days = document.querySelectorAll('.day');

// Add a click event listener to each day
days.forEach(day => {
  day.addEventListener('click', () => {
    // Toggle the 'checked' class
    day.classList.toggle('checked');

    // Save the updated state
    saveHabitStatus();
  });
});

// Function to save habit status to localStorage
function saveHabitStatus() {
  const tracker = {};

  // Loop through each habit row in the table
  document.querySelectorAll('tbody tr').forEach(row => {
    const habitName = row.querySelector('td:first-child').innerText; // Habit name
    const days = row.querySelectorAll('.day');

    tracker[habitName] = {};

    // Loop through each day and save its state
    days.forEach(day => {
      const dayNumber = day.dataset.day; // Get day number
      tracker[habitName][dayNumber] = day.classList.contains('checked'); // Save if the day is checked
    });
  });

  // Save tracker data to localStorage
  localStorage.setItem('habitTracker', JSON.stringify(tracker));
}

// Function to load habit status from localStorage
function loadHabitStatus() {
  const tracker = JSON.parse(localStorage.getItem('habitTracker') || '{}');

  // Loop through each habit row in the table
  document.querySelectorAll('tbody tr').forEach(row => {
    const habitName = row.querySelector('td:first-child').innerText; // Habit name
    const days = row.querySelectorAll('.day');

    // Check if the habit exists in the tracker
    if (tracker[habitName]) {
      // Loop through each day and set its state
      days.forEach(day => {
        const dayNumber = day.dataset.day; // Get day number
        if (tracker[habitName][dayNumber]) {
          day.classList.add('checked'); // Mark as checked if true
        }
      });
    }
  });
}

// Load habit statuses when the page loads
loadHabitStatus();
