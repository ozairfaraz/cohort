let main = document.querySelector("#main");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  let x = Math.floor(Math.random() * 101);
  let y = Math.floor(Math.random() * 101);
  let rot = Math.floor(Math.random() * 361);
  let div = document.createElement("div");
  div.style.height = "80px";
  div.style.width = "80px";
  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
  div.style.position = "absolute";
  div.style.left = x+"%";
  div.style.top = y+"%";
  div.style.rotate = rot+"deg";
  main.appendChild(div);
});
