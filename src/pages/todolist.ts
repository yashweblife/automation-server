import { Component } from "../lib/Component/Component";
import { get_current_user } from "../main";
export interface TodoListItemInterface{
    name:string;
    info:string;
    date:string;
    completed:boolean;
}
export interface TodoListInterface{
    name:string,
    date:string,
    list:TodoListItemInterface[]
}
function get_todolist_for_user():(Promise<Response>|null){
    const user = get_current_user()
    if(user){
        return fetch('/get_todolist_for_user',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:user})
        })
    }
    return null
}
function create_todolist_dom(data:TodoListItemInterface){
    const dom = new Component('div');

}