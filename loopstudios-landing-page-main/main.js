const showbtn = document.querySelector('.menu-btn');
const  hideBtn = document.querySelector('.close');
const navLink = document.querySelector('.ul');


showbtn.addEventListener("click", function(){
    navLink.classList.add("show");
    hideBtn.classList.add("show-close");
});

hideBtn.addEventListener("click", function() {
    navLink.classList.remove("show");
    hideBtn.classList.remove("show-close");
});

