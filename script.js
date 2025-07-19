function generateQuote() {
  const quoteBox = document.getElementById("quoteBox");

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { quote, author } = quotes[randomIndex];

  quoteBox.innerText = `"${quote}"\n— ${author}`;
}
