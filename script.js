async function generateQuote() {
  const quoteBox = document.getElementById("quoteBox");
  quoteBox.innerText = "⏳ Generating a powerful quote...";

  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    quoteBox.innerText = `"${data.content}"\n— ${data.author}`;
  } catch (error) {
    quoteBox.innerText = "⚠️ Failed to fetch quote. Please try again.";
  }
}
