let box4 = document.querySelector(".box-4");
let box6 = document.querySelector(".box-6");
let box18 = document.querySelector(".box-18");
let box21 = document.querySelector(".box-21");
let box23 = document.querySelector(".box-23");
let box38 = document.querySelector(".box-38");
let box40 = document.querySelector(".box-40");

let frame = document.querySelector(".frame");

box4.addEventListener("click", () => {
  frame.className = "frame blanket";
});

box6.addEventListener("click", () => {
  frame.className = "frame glass";
});

box18.addEventListener("click", () => {
  frame.className = "frame white-tag";
});

box21.addEventListener("click", () => {
  frame.className = "frame one-stripe";
});

box23.addEventListener("click", () => {
  frame.className = "frame two-triangles";
});

box38.addEventListener("click", () => {
  frame.className = "frame";
});

box40.addEventListener("click", () => {
  frame.className = "frame black-tag";
});
