const degreeEl = document.getElementById("degree"),
  degreeValueEl = document.getElementById("degree-value"),
  generateBtnEl = document.getElementById("generate-btn"),
  color1El = document.getElementById("color1"),
  color2El = document.getElementById("color2"),
  gradientDisplayEl = document.getElementById("gradient-display"),
  codeDisplayEl = document.getElementById("code-display");

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const generateGradient = () => {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const degree = degreeEl.value;
  color1El.value = color1;
  color2El.value = color2;
  const gradient = `linear-gradient(${degree}deg, ${color1}, ${color2})`;
  gradientDisplayEl.style.background = gradient;
  document.body.style.background = gradient;
  codeDisplayEl.textContent = `background: ${gradient};`;
};

const updateDegreeValue = () => {
  degreeValueEl.textContent = degreeEl.value;
};

generateBtnEl.addEventListener("click", generateGradient);
degreeEl.addEventListener("input", updateDegreeValue);
