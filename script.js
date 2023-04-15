function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  const helloWorldElement = document.getElementById('hello-world');
  const newColor = getRandomColor();
  helloWorldElement.style.transition = 'color 1s';
  helloWorldElement.style.color = newColor;
}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(changeColor, 1000);
});