const mobile_btn = document.getElementById('mobile-btn')
const mobile_menu = document.getElementById('mobile_menu')

mobile_btn.addEventListener('click',()=>{
    mobile_menu.classList.toggle('active')
})
