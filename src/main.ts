import "./styles/index.scss";

export function checkLoginStatus(){
    const test = localStorage.getItem('user')
    if(test == 'undefined' && location.pathname!=='/index.html'){
        window.open('./index.html','_self')
    }
}
window.addEventListener('load',()=>{
    checkLoginStatus();
})