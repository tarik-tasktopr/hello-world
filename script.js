document.addEventListener("DOMContentLoaded", function() {
  const helloWorld = document.querySelector("#hello-world");
  let hue = 0;
  setInterval(function() {
    hue = (hue + 1) % 360;
    helloWorld.style.color = `hsl(${hue}, 100%, 50%)`;
  }, 50);
});