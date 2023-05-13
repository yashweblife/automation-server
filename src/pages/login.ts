import "../styles/login.scss"
const signup_form = document.querySelector('#signup-form')
const login_form = document.querySelector('#login-form')

const login_button = document.querySelector("#login-button")
const signup_button = document.querySelector("#signup-button")

const username_input: HTMLInputElement = document.querySelector('#username-input')!
const password_input: HTMLInputElement = document.querySelector('#password-input')!

const signup_username_input: HTMLInputElement = document.querySelector('#signup-username-input')!
const signup_password_input: HTMLInputElement = document.querySelector('#signup-password-input')!

const signup_toggle = document.querySelector('#signup-toggle-button')
const login_toggle = document.querySelector('#login-toggle-button')

function server_check_login() {
    const data = {
        username: username_input.value,
        password: password_input.value
    }
    fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((res: Response) => {
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
    fetch('/singup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((res: Response) => {
        if (res) {
            console.log(res)
        }
    })
}