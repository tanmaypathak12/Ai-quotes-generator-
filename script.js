async function generateQuote() {
  const quoteBox = document.getElementById("quoteBox");
  quoteBox.innerText = "⏳ Loading...";

  try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    quoteBox.innerText = `"${data[0].q}"\n— ${data[0].a}`;
  } catch (error) {
    quoteBox.innerText = "⚠️ Failed to fetch quote. Try again.";
  }
}
