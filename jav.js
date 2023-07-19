const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click",()=> {
    hamburger.classList.toggle("active")
    navmenu.classList.toggle("active")
})
document.querySelectorAll(".nav-menu").forEach(n => n.addEventListener("click",()=> {
    hamburger.classList.remove("active")
    navmenu.classList.remove("active")
}))
function openIframe(iframeLink) {
    // Open the iframe link in a new tab
    window.open(iframeLink, '_blank');
}
