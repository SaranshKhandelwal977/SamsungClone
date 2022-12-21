document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector(".navi-links").classList.toggle("nav-active")
    if(document.querySelector(".navi-links").classList.contains("nav-active")){
        document.querySelector(".menu").src = "images/close.png";
    }
    else{
        document.querySelector(".menu").src = "images/menu.png";
    }
})