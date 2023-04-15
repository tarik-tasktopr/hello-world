// JavaScript file for random and gradual color change

const helloWorld = document.querySelector("#hello-world");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  const currentColor = helloWorld.style.color;
  const newColor = getRandomColor();
  const colorDiff = chroma.deltaE(currentColor, newColor);
  if (colorDiff > 30) {
    helloWorld.style.color = newColor;
  } else {
    changeColor();
  }
}

setInterval(changeColor, 1000);