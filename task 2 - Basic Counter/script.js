let mainBox = document.getElementById("mainBox");
mainBox.style.height = "50vh";
mainBox.style.width = "50vw";
mainBox.style.display = "flex";
mainBox.style.flexDirection = "column";
mainBox.style.alignItems = "center";
mainBox.style.justifyContent = "center";
mainBox.style.backgroundColor = "crimson";

let buttons1 = document.querySelector(".inc")
let buttons2 = document.querySelector(".des")
buttons1.innerHTML = "Increment"
buttons2.innerHTML = "Decrement"

buttons1.style = "padding:10px 15px; font-size: 1.5rem; margin: 1rem; border-radius: 0.5rem; border: none; cursor: pointer;"
buttons2.style = "padding:10px 15px; font-size: 1.5rem; margin: 1rem; border-radius: 0.5rem; border: none; cursor: pointer;"

let count = 0;

let counter = document.querySelector(".counter")
counter.innerHTML = count
counter.style.color = "#e2e0e0ff"
counter.style.fontSize = "15rem"

buttons1.addEventListener("click", function() {
    count++;
    counter.innerHTML = count;
});

buttons2.addEventListener("click", function() {
    count--;
    counter.innerHTML = count;
});