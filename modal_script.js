let modal = document.querySelector(".modal");

let loginButton1 = document.getElementById("login_button_1");
let loginButton2 = document.getElementById("login_button_2");
let closeButton = document.querySelector(".close");
let closeButton2 = document.getElementById("close_btn");

const openModal = () => (modal.style.display = "block");
const closeModal = () => (modal.style.display = "none");

const outsideClick = (e) => {
    if (e.target == modal) closeModal();
};

loginButton1.addEventListener("click", openModal);
loginButton2.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
closeButton2.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);