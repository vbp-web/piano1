function playNote(key) {
  const audio = new Audio(`${key.toUpperCase()}.mp3`);
  audio.play();
}

function animateKey(key) {
  const keyDiv = document.querySelector(`.key[data-key="${key}"]`);
  if (keyDiv) {
    keyDiv.classList.add("active");
    setTimeout(() => keyDiv.classList.remove("active"), 150);
  }
}

// Mouse/tap support
document.querySelectorAll(".key").forEach((keyDiv) => {
  keyDiv.addEventListener("click", () => {
    const key = keyDiv.getAttribute("data-key");
    playNote(key);
    animateKey(key);
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  const validKeys = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j"];
  if (validKeys.includes(key)) {
    playNote(key);
    animateKey(key);
  }
});
lottie.loadAnimation({
  container: document.getElementById('lottie-bg'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets10.lottiefiles.com/packages/lf20_touohxv0.json' // you can change animation
});
