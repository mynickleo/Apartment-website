//object -->
let allMenuInfo = document.getElementsByName("menu_info");
let allButtonMenu = document.getElementsByName("button_menu");


//function -->
function openMenuInfo(element){
    element.style.display = "flex";
}

function closeMenuInfo(element){
    element.style.display = "none";
}

allMenuInfo.forEach((element) => {
    element.addEventListener("click", e =>{
        closeMenuInfo(element);
    })
});

allButtonMenu.forEach((element) => {
    element.addEventListener("click", ()=>{
        allMenuInfo.forEach((element) => {closeMenuInfo(element)});
        openMenuInfo(element.nextSibling.nextSibling);
    })
})