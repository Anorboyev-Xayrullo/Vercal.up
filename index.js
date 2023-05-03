let box = document.querySelector(".box")
let box1 = document.querySelector(".box_one")
let box2 = document.querySelector(".box_two")
let btn = document.querySelector(".btn")



function makeColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

 btn.onclick = () => {
  box.style.backgroundColor = "#" + makeColor();
  box1.style.backgroundColor = "#" + makeColor();
  box2.style.backgroundColor = "#" + makeColor();
 }




