
// File: script.js
const typingText = document.querySelector(".typing");
const roles = ["AI/ML Intern", "Full Stack Developer", "Generative AI Enthusiast"];
let roleIndex = 0;
let charIndex = 0;



function type() {
  if (charIndex < roles[roleIndex].length) {
    typingText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (roles.length) type();
});
