

const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const dataCreateBtn = document.querySelector('[data-create]');
const dataDestroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector("input");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes(amount) {

  amount = input.value;
  const boxesArr = [];
  // if (amount > 100) {alert ("Insert number from 1 to 100"); return};


      for (let i = 0; i < amount; i++) {
        const bgColor = getRandomHexColor();
        const box = document.createElement("div");
        box.style.backgroundColor = bgColor;
        box.style.width = 30 + i*10 + "px";
        box.style.height = 30 + i*10 + "px";
        boxesArr.push(box);
      }

      boxes.append(...boxesArr);
      // console.log(boxes);

  }


//создаем блоки при клике на кнопку

dataCreateBtn.addEventListener("click", createBoxes);


function destroyBoxes() {
   boxes.innerHTML = "";
  //  console.log(boxes);

}

// удаляем блоки при клике на кнопку

dataDestroyBtn.addEventListener("click", destroyBoxes);

