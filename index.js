const toggleBtn = document.getElementById('nav-toggle')
const navLink = document.getElementById('nav-links')

toggleBtn.addEventListener('click',()=>{
    navLink.classList.toggle('active');
})