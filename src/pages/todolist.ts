import { $ } from "../lib/DOMDev/DOMDev";
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
if (get_current_user() == "undefined") {
    window.open('./index.html', "_self");
}

export function create_todolist_dom(list:TodoListInterface){
    const dom = $.makeDOM("list")
    
    return(dom)
}

export function create_todolist_item_dom(data: TodoListItemInterface) {
    const dom = $.makeDOM().addClass("item").addChildren([
        $.makeDOM()
            .addClass("header")
            .addChildren([
                $.makeDOM("h5")
                    .setText(data.name),

                $.makeDOM("nav")
                    .addChildren([
                        $.makeDOM("button")
                            .setText("Mark"),

                        $.makeDOM("button")
                            .setText("Close")
                    ]),
            ]),
        $.makeDOM().addClass("content").addChildren([
            $.makeDOM("code").setText(data.date),
            $.makeDOM("p").setText(data.info)
        ])
    ])
    return (dom)
}
