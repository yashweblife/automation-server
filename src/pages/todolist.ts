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

export function create_todolist_dom(list: TodoListInterface) {
    const dom = new $("details")
    const listData = list.list.map((val: TodoListItemInterface) => create_todolist_item_dom(val))
    dom.addChildren([
        new $("summary").addChild(
            new $().addClass("info")
                .addChildren(
                    [
                        new $().addClass("content")
                            .addChildren([
                                new $('h4').setText(list.name),
                                new $('nav').addChild(
                                    new $('button').setText('Delete')
                                ),
                            ])
                        ,
                        new $().addClass("footer")
                            .addChildren([
                                new $('p').setText(list.status),
                                new $('p').setText(list.date)
                            ]),
                    ]
                )
        ),
        new $().addClass("list").addChildren(listData)
    ])
    return (dom)
}

export function create_todolist_item_dom(data: TodoListItemInterface) {
    const handle_mark_button = () => { }
    const handle_close_button = () => { }
    const item = new $()
        .addClass("item")
        .addChildren([
            new $()
                .addClass("header")
                .addChildren([
                    new $("h5")
                        .setText(data.name),
                    new $("nav")
                        .addChildren([
                            new $("button")
                                .setText("Mark")
                                .addEvent("click", handle_mark_button),
                            new $("button")
                                .setText("Close")
                                .addEvent("click", handle_close_button)
                        ])
                ]),
            new $()
                .addClass("content")
                .addChildren([
                    new $("code")
                        .setText(data.date),
                    new $("p")
                        .setText(data.info)
                ]),
        ])
    return (item);
}
