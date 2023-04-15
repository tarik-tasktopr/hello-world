// JavaScript file for random and gradual color change

// Select the text element
const text = document.querySelector('h1');

// Define a function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Define a function to gradually change the color
function changeColor() {
  const currentColor = text.style.color;
  const newColor = getRandomColor();
  const steps = 50;
  let step = 0;
  const intervalId = setInterval(() => {
    step++;
    const color = `rgb(
      ${Math.floor(parseInt(currentColor.slice(1, 3), 16) + (parseInt(newColor.slice(1, 3), 16) - parseInt(currentColor.slice(1, 3), 16)) / steps * step)},
      ${Math.floor(parseInt(currentColor.slice(3, 5), 16) + (parseInt(newColor.slice(3, 5), 16) - parseInt(currentColor.slice(3, 5), 16)) / steps * step)},
      ${Math.floor(parseInt(currentColor.slice(5, 7), 16) + (parseInt(newColor.slice(5, 7), 16) - parseInt(currentColor.slice(5, 7), 16)) / steps * step)}
    )`;
    text.style.color = color;
    if (step === steps) {
      clearInterval(intervalId);
      setTimeout(changeColor, 1000);
    }
  }, 20);
}

// Call the changeColor function to start the color change
changeColor();