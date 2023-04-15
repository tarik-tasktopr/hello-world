// Get the "Hello world!" text element
const helloWorld = document.getElementById("hello-world");

// Define a function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Define a function to gradually change the color of the text
function changeColor() {
  let startColor = helloWorld.style.color || "#000000";
  let endColor = getRandomColor();
  let currentColor = startColor;
  let steps = 50;
  let step = 0;
  let colorInterval = setInterval(function() {
    step++;
    let r1 = parseInt(currentColor.slice(1, 3), 16);
    let g1 = parseInt(currentColor.slice(3, 5), 16);
    let b1 = parseInt(currentColor.slice(5, 7), 16);
    let r2 = parseInt(endColor.slice(1, 3), 16);
    let g2 = parseInt(endColor.slice(3, 5), 16);
    let b2 = parseInt(endColor.slice(5, 7), 16);
    let r = Math.floor(r1 + (r2 - r1) * step / steps);
    let g = Math.floor(g1 + (g2 - g1) * step / steps);
    let b = Math.floor(b1 + (b2 - b1) * step / steps);
    let color = "#" + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0");
    helloWorld.style.color = color;
    if (step >= steps) {
      clearInterval(colorInterval);
      setTimeout(changeColor, 1000);
    }
  }, 20);
}

// Call the changeColor function to start the color change
changeColor();