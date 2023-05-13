import "../styles/login.scss"
const login_form: HTMLElement = document.querySelector('#login-form')!
const signup_form: HTMLElement = document.querySelector('#signup-form')!

const login_button: HTMLButtonElement = document.querySelector("#login-button")!
const signup_button: HTMLButtonElement = document.querySelector("#signup-button")!

const username_input: HTMLInputElement = document.querySelector('#username-input')!
const password_input: HTMLInputElement = document.querySelector('#password-input')!

const signup_username_input: HTMLInputElement = document.querySelector('#signup-username-input')!
const signup_password_input: HTMLInputElement = document.querySelector('#signup-password-input')!

const signup_toggle: HTMLButtonElement = document.querySelector('#signup-toggle-button')!
const login_toggle: HTMLButtonElement = document.querySelector('#login-toggle-button')!

function server_check_login() {
    const data = {
        username: username_input.value,
        password: password_input.value
    }
    console.log(data)
    fetch('/handle_login', {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((res:Response)=>res.json())
    .then((res: Response) => {
        if (res) {
            console.log(res);
        }
    })
}
function server_check_signup() {
    const data = {
        username: signup_username_input.value,
        password: signup_password_input.value
    }
    console.log(data)
    fetch('/handle_signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((data:Response)=>data.json())
    .then((res: Response) => {
        if (res) {
            console.log(res)
        }
    })
}

signup_toggle.addEventListener('click', () => {
    login_form.classList.add('display-off')
    signup_form.classList.remove('display-off')
})
login_toggle.addEventListener('click', () => {
    signup_form.classList.add('display-off')
    login_form.classList.remove('display-off')
})
login_button.addEventListener('click', () => {
    server_check_login();
})
signup_button.addEventListener('click', () => {
    server_check_signup();
})