// Dynamically change heading text based on input
const dynamicText = document.getElementById("dynamicText");
const textInput = document.getElementById("textInput");

textInput.addEventListener("input", function() {
  dynamicText.textContent = textInput.value;
});

// Changing background on button click
document.getElementById("changeColorButton").addEventListener("click", function() {
  // Generate two random colors for a gradient
  const color1 = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
  const color2 = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
  document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
});

// Adding or removing a paragraph element on button click
const toggleButton = document.getElementById("toggleParagraphButton");
const infoParagraph = document.getElementById("infoParagraph");

toggleButton.addEventListener("click", function() {
  if (infoParagraph.parentNode) {
    infoParagraph.parentNode.removeChild(infoParagraph);
    toggleButton.textContent = "Add Paragraph";
  } else {
    // Re-adding the paragraph to the article
    const article = document.querySelector("article");
    article.appendChild(infoParagraph);
    toggleButton.textContent = "Remove Paragraph";
  }
});
