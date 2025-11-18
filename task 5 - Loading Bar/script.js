let progressBar = document.querySelector(".progress-bar");
let percent = document.querySelector(".percent");
let btn = document.querySelector(".start-btn");
let h2 = document.querySelector("h2");

btn.addEventListener("click", () => {
  let grow = 0;
  let pro = setInterval(() => {
    grow++;
    percent.innerHTML = grow + "%";
    progressBar.style.width = grow + "%";
    if (grow === 100) {
      clearInterval(pro);
      h2.innerText = "Downloaded!!";
    }
  }, 50);
});
