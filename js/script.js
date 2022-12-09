let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let topBtn = document.getElementById('top-btn');
menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

topBtn.addEventListener('click', ()=> {
    window.scrollTo({top:0, behavior:"smooth"})
    console.log('clicked')
})



function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 2000);
}

window.onload = fadeOut();