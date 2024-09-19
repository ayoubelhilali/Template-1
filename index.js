let icon = document.querySelector(".icon");
let menu = document.querySelector(".menu");
let closeBtn = document.querySelector(".closeBtn")
console.log(closeBtn)
icon.addEventListener("click", (e) => {
    menu.style.display = "block";
    closeBtn.addEventListener("click", (e) => {
        menu.style.display = "none";
    });
});


document.addEventListener('click', (e) => {
    // If the clicked element is not a child of #sideNav..
    // ..then close navigation..
    if (!menu.contains(e.target) && e.target!==icon) {
        menu.style.display = "none";
    }
});

