import "../styles/index.scss";

const logout_button:HTMLButtonElement = document.querySelector('#logout-button')!;

logout_button.addEventListener('click',()=>{
    localStorage.setItem('user', 'undefined')
    window.open('./index.html','_self')
})
