'use strict';

const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    document.getElementById("modal").style.display = "flex";
    overlay.classList.remove("hidden");
}

const closeModal = function () {
    document.getElementById("modal").style.display = "none";
    overlay.classList.add("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);