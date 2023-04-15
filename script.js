function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  const helloWorldElement = document.querySelector('h1');
  const newColor = getRandomColor();
  helloWorldElement.style.color = newColor;
}

function gradualColorChange() {
  const interval = setInterval(changeColor, 1000);
}

document.addEventListener('DOMContentLoaded', gradualColorChange);