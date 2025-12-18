const flipBtn = document.getElementById("flip-btn");
const idCard = document.getElementById("idCard");

flipBtn.addEventListener("click", () => {
    idCard.classList.toggle("flipped");
});