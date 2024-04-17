// JavaScript (script.js)
const colorDiv = document.getElementById("color");
const shapeDiv = document.getElementById("shape");
const headingColor = document.getElementById("heading");
const btn = document.querySelectorAll(".btn");

const shapes = [
  "circle(50% at 50% 50%)", // Circle
  "polygon(50% 0%, 0% 100%, 100% 100%)", // Triangle
  "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Rectangle
];

let currentShapeIndex = 0;

const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  //   shapeDiv.style.backgroundColor = randomCode;

  return randomCode;
};
const changeShape = () => {
  shapeDiv.style.clipPath = shapes[currentShapeIndex];
  currentShapeIndex = (currentShapeIndex + 1) % shapes.length;

  shapeDiv.style.backgroundColor = getColor();
};

// Add event listeners to the buttons
document.getElementById("color-btn").addEventListener("click", () => {
  // Apply the random color to the background of the #color div
  colorDiv.style.backgroundColor = getColor();
  headingColor.style.color = getColor();
  btn[0].style.backgroundColor = getColor();
  btn[1].style.backgroundColor = getColor();
});
document.getElementById("shape-btn").addEventListener("click", changeShape);
// document.getElementById("shape-btn").addEventListener("click", changeShape);
