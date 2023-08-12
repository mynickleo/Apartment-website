var allContainers = document.querySelectorAll(".container");

function checkContainers(){
    let triggerBottom = (window.innerHeight / 5) * 4;

    allContainers.forEach((container) =>{
        const containerTop = container.getBoundingClientRect().top;
        if(containerTop < triggerBottom) container.classList.add("show");
        else container.classList.remove("show");
    });
};

window.addEventListener("scroll", checkContainers);
checkContainers();