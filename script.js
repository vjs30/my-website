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
