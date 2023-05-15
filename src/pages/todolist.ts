import { get_current_user } from "../main";
import "../styles/common.scss";
import "../styles/todolist.scss";

export interface TodoListItemInterface {
    name: string;
    info: string;
    date: string;
    completed: boolean;
}
export interface TodoListInterface {
    name: string,
    date: string,
    list: TodoListItemInterface[],
    status: string,
    id: string
}
export function get_todolist_for_user(): (Promise<Response> | null) {
    const user = get_current_user()
    if (user) {
        return fetch('/get_todolist_for_user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: user })
        })
    }
    return null
}
function createDOM(data: string = "div") {
    return (document.createElement(data));
}
function domWithClass(d: string, c: string) {
    const output = document.createElement(d)
    output.classList.add(c)
    return (output)
}
function domWithText(d: string, t: string) {
    const output = document.createElement(d);
    output.innerText = t;
    return (output)
}
function domAddChild(parent: HTMLElement, children: HTMLElement[]) {
    children.forEach((child: HTMLElement) => {
        parent.append(child)
    })
    return (parent);
}
export function postFetch(url: string, data: any) {
    return fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}
export function create_todolist_dom(data: TodoListInterface) {
    const dom = domWithClass('div', 'item')
    const content = domWithClass('div', 'content')
    const footer = domWithClass('div', 'footer')
    const h4 = domWithText('h4', data.name);
    const nav = createDOM('nav')
    const open_button = domWithText('button', 'Open')
    const delete_button = domWithText('button', 'Delete')
    const status = domWithText('p', data.status)
    const date = domWithText('p', data.date)
    open_button.addEventListener('click', () => {
        handle_open_list(data)
    })
    delete_button.addEventListener('click', () => {
        handle_delete_list(data.id)
    })
    domAddChild(dom, [
        domAddChild(content, [
            h4, domAddChild(nav, [
                open_button, delete_button
            ]),
            domAddChild(footer, [status, date])
        ])
    ])
    return (dom)

}
create_todolist_dom({
    name: "Hello",
    id: "sdfsergare",
    status: "1/10",
    list: [],
    date: "sdfbgsdfe"
})

function handle_open_list(data: TodoListInterface) {
    console.log(data)
}
function handle_add_list() {
    const data = {}
    postFetch("/handle_add_list", data).then(() => {

    })
}
function handle_delete_list(id: string) {
    postFetch("/handle_delete_list", {
        id: id
    }).then(() => {

    })
}


const add_list_button = document.querySelector('#add-new-todo-list')!
add_list_button.addEventListener('click',()=>{
    handle_add_list()
})