const p = document.querySelector("p");
let text = p.innerText;

let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";

let iteration = 0;

function randomize() {
  let newText = text
    .split("")
    .map((char, idx) => {
      if (idx < iteration) {
        return char;
      }
      return characters.split("")[
        Math.floor(Math.random() * characters.length)
      ];
    })
    .join("");
  iteration += 0.25;
  p.innerText = newText;
}

setInterval(() => {
  randomize();
}, 30);
