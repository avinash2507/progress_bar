const nextElement = document.getElementById("next");
const prevElement = document.getElementById("prev");
const stepElement = document.querySelectorAll(".step");
const barstepupElement = document.querySelector(".barstepup");
console.log(barstepupElement);
let currentElement = 0;
nextElement.addEventListener("click", () => {
  currentElement++;
  if (currentElement > stepElement.length) {
    currentElement = stepElement.length;
  }
  console.log(currentElement);
  updatebars();
});
prevElement.addEventListener("click", () => {
  currentElement--;

  console.log(currentElement);
  if (currentElement <1) {
    currentElement = 1;
  }
  updatebars();
});
function updatebars() {
  stepElement.forEach((stepElement, idx) => {
    if (idx < currentElement) {
      stepElement.classList.add("checked");
      stepElement.innerHTML = `<i class="fa-solid fa-check"></i>
      <small> ${ idx ===0 ?"Start":idx === 5 ?"DONE" : "Level "+ idx}</small> `;   
    }
    else{
        stepElement.classList.remove("checked");
        stepElement.innerHTML =`    <i class="fa-solid fa-xmark"></i>`
    }
});
const checkedNum= document.querySelectorAll(".checked");

barstepupElement.style.width = ((checkedNum.length-1)/(stepElement.length-1))*100 +"%";

}

