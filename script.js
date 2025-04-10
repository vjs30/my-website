
// Array of colors for the background
const colors = [
  '#FF5733', // Red
  '#33FF57', // Green
  '#3357FF', // Blue
  '#F1C40F', // Yellow
  '#9B59B6', // Purple
  '#1ABC9C', // Teal
  '#E74C3C'  // Light Red
];

// Function to change the background color
function changeBackgroundColor() {
  // Pick a random color from the array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Change the background color of the body
  document.body.style.backgroundColor = randomColor;
}

// Run the function every 60 seconds (60000 milliseconds)
setInterval(changeBackgroundColor, 60000);

// Call it immediately when the page loads to set the initial color
changeBackgroundColor();

function showQuote() {
  const quotes = [
    "Believe in yourself.",
    "You are stronger than you think.",
    "Dream big. Start small. Act now.",
    "Failure is just another step toward success.",
    "Your future is created by what you do today.",
    "Always trust God",
    "Don't give up!",
    "Everyday is a new Day",
    "You're wonderful than animals",
    "Just do it!"
  ];
  
  // Pick a random quote
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  
  // Update the quote on the page
  document.getElementById("quote").innerText = randomQuote;
}
